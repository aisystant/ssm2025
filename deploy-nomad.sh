#!/bin/bash

# Nomad Deployment Script for SSH-only access
# This script helps deploy your Docker image to a Nomad cluster via SSH

set -e

# Configuration variables
NOMAD_HOST=""
NOMAD_USER=""
SSH_KEY_PATH=""
DOCKER_IMAGE=""
DOCKER_REGISTRY=""
JOB_FILE="nomad-job.hcl"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to show usage
usage() {
    echo "Usage: $0 [OPTIONS] COMMAND"
    echo ""
    echo "Commands:"
    echo "  deploy    Deploy the application to Nomad"
    echo "  status    Check the status of the deployment"
    echo "  logs      Show logs from the deployment"
    echo "  stop      Stop the deployment"
    echo "  plan      Show deployment plan"
    echo "  build     Build and push Docker image"
    echo ""
    echo "Options:"
    echo "  -h, --host HOST        Nomad server host (required)"
    echo "  -u, --user USER        SSH user (default: root)"
    echo "  -k, --key PATH         SSH private key path (default: ~/.ssh/id_rsa)"
    echo "  -i, --image IMAGE      Docker image name (default: ssm2025:latest)"
    echo "  -r, --registry URL     Docker registry URL"
    echo "  --help                 Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 -h nomad.example.com -u nomad -i myregistry/ssm2025:v1.0.0 deploy"
    echo "  $0 -h nomad.example.com status"
    echo "  $0 -h nomad.example.com logs"
}

# Parse command line arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        -h|--host)
            NOMAD_HOST="$2"
            shift 2
            ;;
        -u|--user)
            NOMAD_USER="$2"
            shift 2
            ;;
        -k|--key)
            SSH_KEY_PATH="$2"
            shift 2
            ;;
        -i|--image)
            DOCKER_IMAGE="$2"
            shift 2
            ;;
        -r|--registry)
            DOCKER_REGISTRY="$2"
            shift 2
            ;;
        --help)
            usage
            exit 0
            ;;
        deploy|status|logs|stop|plan|build)
            COMMAND="$1"
            shift
            ;;
        *)
            print_error "Unknown option: $1"
            usage
            exit 1
            ;;
    esac
done

# Set defaults
NOMAD_USER=${NOMAD_USER:-"root"}
SSH_KEY_PATH=${SSH_KEY_PATH:-"$HOME/.ssh/id_rsa"}
DOCKER_IMAGE=${DOCKER_IMAGE:-"ssm2025:latest"}

# Validate required parameters
if [[ -z "$NOMAD_HOST" ]]; then
    print_error "Nomad host is required. Use -h or --host option."
    usage
    exit 1
fi

if [[ -z "$COMMAND" ]]; then
    print_error "Command is required."
    usage
    exit 1
fi

# SSH connection function
ssh_nomad() {
    ssh -i "$SSH_KEY_PATH" -o StrictHostKeyChecking=no "$NOMAD_USER@$NOMAD_HOST" "$@"
}

# Function to update job file with correct image
update_job_file() {
    if [[ -n "$DOCKER_REGISTRY" ]]; then
        FULL_IMAGE="$DOCKER_REGISTRY/$DOCKER_IMAGE"
    else
        FULL_IMAGE="$DOCKER_IMAGE"
    fi
    
    print_status "Updating job file with image: $FULL_IMAGE"
    sed "s|image = \".*\"|image = \"$FULL_IMAGE\"|g" "$JOB_FILE" > "${JOB_FILE}.tmp"
    mv "${JOB_FILE}.tmp" "$JOB_FILE"
}

# Function to build and push Docker image
build_image() {
    print_status "Building Docker image..."
    
    if [[ -n "$DOCKER_REGISTRY" ]]; then
        FULL_IMAGE="$DOCKER_REGISTRY/$DOCKER_IMAGE"
        docker build -t "$DOCKER_IMAGE" .
        docker tag "$DOCKER_IMAGE" "$FULL_IMAGE"
        
        print_status "Pushing image to registry..."
        docker push "$FULL_IMAGE"
        print_success "Image pushed successfully: $FULL_IMAGE"
    else
        docker build -t "$DOCKER_IMAGE" .
        print_success "Image built successfully: $DOCKER_IMAGE"
        print_warning "No registry specified. Make sure the image is available on your Nomad nodes."
    fi
}

# Function to deploy to Nomad
deploy() {
    print_status "Deploying to Nomad cluster at $NOMAD_HOST..."
    
    # Update job file with correct image
    update_job_file
    
    # Copy job file to Nomad server
    print_status "Copying job file to Nomad server..."
    scp -i "$SSH_KEY_PATH" -o StrictHostKeyChecking=no "$JOB_FILE" "$NOMAD_USER@$NOMAD_HOST:/tmp/ssm2025-job.hcl"
    
    # Submit the job
    print_status "Submitting job to Nomad..."
    ssh_nomad "nomad job run /tmp/ssm2025-job.hcl"
    
    if [[ $? -eq 0 ]]; then
        print_success "Deployment successful!"
        print_status "Checking deployment status..."
        ssh_nomad "nomad job status ssm2025"
    else
        print_error "Deployment failed!"
        exit 1
    fi
}

# Function to show deployment plan
plan() {
    print_status "Generating deployment plan..."
    
    # Update job file with correct image
    update_job_file
    
    # Copy job file to Nomad server
    scp -i "$SSH_KEY_PATH" -o StrictHostKeyChecking=no "$JOB_FILE" "$NOMAD_USER@$NOMAD_HOST:/tmp/ssm2025-job.hcl"
    
    # Show plan
    ssh_nomad "nomad job plan /tmp/ssm2025-job.hcl"
}

# Function to check status
status() {
    print_status "Checking deployment status..."
    ssh_nomad "nomad job status ssm2025"
}

# Function to show logs
logs() {
    print_status "Fetching logs..."
    ssh_nomad "nomad alloc logs -job ssm2025 -f"
}

# Function to stop deployment
stop() {
    print_status "Stopping deployment..."
    ssh_nomad "nomad job stop ssm2025"
    print_success "Deployment stopped."
}

# Execute command
case $COMMAND in
    build)
        build_image
        ;;
    deploy)
        deploy
        ;;
    plan)
        plan
        ;;
    status)
        status
        ;;
    logs)
        logs
        ;;
    stop)
        stop
        ;;
    *)
        print_error "Unknown command: $COMMAND"
        usage
        exit 1
        ;;
esac
