#!/bin/bash

# Docker build and run script for ssm2025 VitePress site

set -e

COMMAND=${1:-help}
IMAGE_NAME="ssm2025"
CONTAINER_NAME="ssm2025-app"

case $COMMAND in
  "build")
    echo "Building Docker image..."
    docker build -t $IMAGE_NAME .
    echo "Build complete!"
    ;;
    
  "run")
    echo "Running Docker container..."
    docker stop $CONTAINER_NAME 2>/dev/null || true
    docker rm $CONTAINER_NAME 2>/dev/null || true
    docker run -d --name $CONTAINER_NAME -p 8080:8080 $IMAGE_NAME
    echo "Container started at http://localhost:8080"
    ;;
    
  "stop")
    echo "Stopping container..."
    docker stop $CONTAINER_NAME 2>/dev/null || true
    echo "Container stopped"
    ;;
    
  "logs")
    docker logs -f $CONTAINER_NAME
    ;;
    
  "clean")
    echo "Cleaning up..."
    docker stop $CONTAINER_NAME 2>/dev/null || true
    docker rm $CONTAINER_NAME 2>/dev/null || true
    docker rmi $IMAGE_NAME 2>/dev/null || true
    echo "Cleanup complete"
    ;;
    
  "compose-up")
    docker-compose up -d
    echo "Services started with docker-compose"
    ;;
    
  "compose-down")
    docker-compose down
    echo "Services stopped with docker-compose"
    ;;
    
  "help"|*)
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  build         Build the Docker image"
    echo "  run           Run the Docker container (port 8080)"
    echo "  stop          Stop the container"
    echo "  logs          Show container logs"
    echo "  clean         Remove container and image"
    echo "  compose-up    Start services with docker-compose"
    echo "  compose-down  Stop services with docker-compose"
    echo "  help          Show this help message"
    ;;
esac
