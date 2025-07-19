#!/bin/bash

# Build and push script for GitHub Container Registry
set -e

# Configuration
REGISTRY="ghcr.io"
NAMESPACE="aisystant"
IMAGE_NAME="ssm2025"
TAG="${1:-latest}"
FULL_IMAGE="$REGISTRY/$NAMESPACE/$IMAGE_NAME:$TAG"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Docker is running
if ! docker info >/dev/null 2>&1; then
    print_error "Docker is not running. Please start Docker first."
    exit 1
fi

# Check if logged in to GitHub Container Registry
if ! docker info 2>/dev/null | grep -q "Username:.*"; then
    print_error "You need to login to GitHub Container Registry first:"
    echo "Run: docker login ghcr.io -u YOUR_GITHUB_USERNAME"
    echo "Use a Personal Access Token (PAT) with 'write:packages' scope as password"
    exit 1
fi

print_status "Building Docker image: $FULL_IMAGE"

# Build the image
docker build -t "$FULL_IMAGE" .

if [[ $? -eq 0 ]]; then
    print_success "Image built successfully: $FULL_IMAGE"
else
    print_error "Failed to build image"
    exit 1
fi

print_status "Pushing image to GitHub Container Registry..."

# Push the image
docker push "$FULL_IMAGE"

if [[ $? -eq 0 ]]; then
    print_success "Image pushed successfully: $FULL_IMAGE"
    echo ""
    print_status "Your image is now available at: $FULL_IMAGE"
    print_status "You can now deploy it to Nomad using:"
    echo "./deploy-nomad.sh -h YOUR_NOMAD_HOST -i $FULL_IMAGE deploy"
else
    print_error "Failed to push image"
    exit 1
fi
