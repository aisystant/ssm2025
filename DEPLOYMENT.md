# GitHub Actions Deployment Setup

This repository uses the existing `docker-publish.yml` workflow to build, push, and deploy to a Nomad cluster.

## Workflow Overview

The `.github/workflows/docker-publish.yml` workflow:
- **On Pull Requests**: Builds and tests the Docker image (no push)
- **On Push to Main**: Builds, pushes to GHCR as `ghcr.io/aisystant/ssm2025:main`, and deploys to Nomad
- **On Tags**: Builds and pushes versioned images (e.g., `v1.0.0`)

## Deployment Architecture

### Docker Image
- **Base**: Multi-stage build with Node.js + Nginx
- **Security**: Non-root user, security headers, minimal attack surface
- **Performance**: Gzip compression, optimized caching, static asset serving
- **Health**: Built-in health checks for orchestration
- **Port**: 8080 (non-privileged)
- **Platforms**: AMD64 and ARM64 support

### CI/CD Workflows
- **Build** (`docker-publish.yml`): Builds and publishes to GHCR
- **Deploy** (`deploy.yml`): Deploys to Nomad clusters via SSH

### Available Image Tags
- `main` - Latest stable build from main branch
- `v1.0.0` - Semantic version releases  
- `sha-abc123f` - Specific commit builds
- `pr-45` - Pull request builds for testing

### Nomad Job Configuration
- **Service Type**: Long-running web service
- **Instances**: 2 replicas for high availability
- **Resources**: 100MHz CPU, 128MB RAM per instance
- **Health Checks**: HTTP health endpoint monitoring
- **Service Discovery**: Automatic registration with Nomad service mesh

## Required Configuration

You need to configure the following in your GitHub repository:

### 1. Navigate to Repository Settings

#### For Variables (non-sensitive):
Go to: `Settings` → `Secrets and variables` → `Actions` → `Variables` tab → `New repository variable`

#### For Secrets (sensitive):
Go to: `Settings` → `Secrets and variables` → `Actions` → `Secrets` tab → `New repository secret`

### 2. Add Repository Variables:

#### `NOMAD_HOST`
- **Type**: Variable (not secret)
- **Description**: The hostname or IP address of your Nomad server
- **Example**: `nomad.yourcompany.com` or `192.168.1.100`

#### `NOMAD_USER`
- **Type**: Variable (not secret)  
- **Description**: SSH username for connecting to the Nomad server
- **Example**: `root`, `nomad`, or your specific username

### 3. Add Repository Secret:

#### `NOMAD_SSH_PRIVATE_KEY`
- **Type**: Secret (sensitive)
- **Description**: Private SSH key for authentication to the Nomad server
- **Format**: Complete private key including headers
- **Example**:
  ```
  -----BEGIN OPENSSH PRIVATE KEY-----
  b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABFwAAAAdzc2gtcn
  ... (your private key content) ...
  -----END OPENSSH PRIVATE KEY-----
  ```

## Setting Up SSH Key

If you don't have an SSH key pair for Nomad access:

```bash
# Generate a new SSH key pair (run this locally)
ssh-keygen -t ed25519 -C "github-actions-nomad" -f ~/.ssh/nomad_deploy_key

# Copy the public key to your Nomad server
ssh-copy-id -i ~/.ssh/nomad_deploy_key.pub user@your-nomad-server

# Test the connection
ssh -i ~/.ssh/nomad_deploy_key user@your-nomad-server "nomad version"
```

Then add the **private key** (`~/.ssh/nomad_deploy_key`) content to the `NOMAD_SSH_PRIVATE_KEY` **secret**, and set `NOMAD_HOST` and `NOMAD_USER` as **variables**.

## Deployment Process

### Automatic Deployment
1. Push changes to `main` branch or merge a PR
2. GitHub Actions will:
   - Build the VitePress site
   - Create a Docker image
   - Push to `ghcr.io/aisystant/ssm2025:main`
   - Deploy to your Nomad cluster

### Manual Deployment
You can also trigger deployment manually using the deployment script:

```bash
# Make script executable
chmod +x deploy-nomad.sh

# Deploy manually
./deploy-nomad.sh -h your-nomad-server.com -u nomad-user deploy
```

## Monitoring Deployment

### GitHub Actions
- Check the Actions tab in your repository for build/deploy status
- View logs for any deployment issues

### Nomad Cluster
```bash
# Check job status
nomad job status ssm2025

# View logs
nomad alloc logs -job ssm2025

# Check service health
nomad service list
```

## Customization

### Modify Nomad Configuration
Edit `nomad-job.hcl` to customize:
- Instance count
- Resource allocation
- Port mappings
- Health checks

### Modify Deployment Workflow
Edit `.github/workflows/docker-publish.yml` to:
- Change deployment triggers
- Add additional testing steps
- Modify deployment strategy

## Troubleshooting

### Common Issues

1. **SSH Connection Failed**
   - Verify `NOMAD_HOST` and `NOMAD_USER` variables
   - Check SSH key secret format and permissions
   - Ensure SSH key is added to Nomad server

2. **Docker Image Pull Failed**
   - Verify image name in `nomad-job.hcl`
   - Check if image was pushed successfully to GHCR
   - Ensure Nomad nodes can access GitHub Container Registry

3. **Deployment Failed**
   - Check Nomad server logs
   - Verify resource availability on Nomad nodes
   - Review job specification syntax

### Debug Commands

```bash
# Test SSH connection manually
ssh -i ~/.ssh/nomad_key user@nomad-server "nomad version"

# Check Nomad job validation
nomad job validate nomad-job.hcl

# View detailed job status
nomad job status -verbose ssm2025
```
