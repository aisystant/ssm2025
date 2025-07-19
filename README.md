# ssm2025

This is a [VitePress](https://vitepress.dev/) site.

## Getting Started

### Local Development

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build the site for production
npm run build

# Preview the production build
npm run preview
```

### Docker Development

```bash
# Build and run with Docker
./docker.sh build
./docker.sh run

# Or use docker-compose
docker-compose up -d

# Access the site at http://localhost:8080
```

## Docker Deployment

The project includes Docker support for static site deployment with nginx:

- **Dockerfile**: Production-ready build with security hardening
- **nginx.conf**: Production nginx configuration with security headers
- **docker-compose.yml**: Easy local development setup  
- **docker.sh**: Helper script for common Docker operations

### GitHub Actions

The project includes a GitHub Actions workflow (`.github/workflows/docker-publish.yml`) that:

- Builds Docker images on push to main branch and pull requests
- Publishes images to GitHub Container Registry (ghcr.io)
- Supports multi-platform builds (linux/amd64, linux/arm64)
- Includes deployment placeholder for production environments

### Environment Variables

The Docker image runs nginx on port 8080 for better security (non-privileged port) and includes:

- Security hardening (non-root user, security headers)
- Health checks for container orchestration
- Gzip compression and optimized caching
- SPA routing support

For more details, check out the [VitePress documentation](https://vitepress.dev/guide).