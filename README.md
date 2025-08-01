# SSM 2025

A modern [VitePress](https://vitepress.dev/) website with automated Docker deployment to Nomad clusters.

## 🚀 Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Docker Development

```bash
# Quick start with Docker
./docker.sh build && ./docker.sh run

# Or use Docker Compose
docker-compose up -d

# Visit http://localhost:8080
```

## 📦 Deployment

This project features automated CI/CD with Docker and Nomad:

- **🔄 Automatic**: Push to `main` → Build → Deploy to production
- **🎯 Manual**: Deploy any version to any environment via GitHub Actions
- **🏗️ Multi-platform**: Supports AMD64 and ARM64 architectures
- **🔒 Secure**: SSH-based deployment with environment separation

### Quick Deploy Setup

1. **Configure GitHub Repository**:
   - Variables: `NOMAD_HOST`, `NOMAD_USER`
   - Secret: `NOMAD_SSH_PRIVATE_KEY`

2. **Deploy**:
   - Push to `main` for automatic deployment
   - Use Actions → "Deploy to Nomad" for manual deployment

📋 **Detailed setup guide**: [DEPLOYMENT.md](./DEPLOYMENT.md)

## 🛠️ Architecture

### Frontend Stack
- **Framework**: [VitePress](https://vitepress.dev/) - Vue-powered static site generator
- **Styling**: [Bootstrap 5.3.6](https://getbootstrap.com/) - Responsive CSS framework
- **Components**: [Swiper 11.2.8](https://swiperjs.com/) - Touch slider component
- **Build Tool**: [Vite](https://vitejs.dev/) - Fast build tool and dev server
- **Preprocessing**: [Sass](https://sass-lang.com/) - CSS extension language

### Development Tools
- **Package Manager**: npm
- **Vue Composition**: [@vueuse/core](https://vueuse.org/) - Vue composition utilities
- **YAML Processing**: js-yaml - YAML parsing for content
- **SVG Sprites**: vite-plugin-svg-sprite - SVG optimization

### Content Structure
- **Pages**: Markdown files in `src/` directory
- **Components**: Reusable content in `components/` directory
- **Assets**: Images and static files in `src/public/`
- **Styling**: Custom SCSS with Bootstrap integration

### URL Redirects
- **Configuration**: Stored in `nginx/conf.d/redirects.conf`, auto-generated from CSV files
- **CSV Types**:
  - `nginx/internal-redirects.csv`: Old paths to new paths on the new site (`/old-path,/new-path`)
  - `nginx/external-redirects.csv`: Paths to redirect to old.system-school (`/path-not-implemented`)
- **Generate Redirects**:
  ```bash
  cd nginx && python3 csv-to-nginx-redirects.py internal-redirects.csv external-redirects.csv conf.d/redirects.conf
  ```

## 📚 Resources

- [VitePress Documentation](https://vitepress.dev/guide)
- [Deployment Guide](./DEPLOYMENT.md)
- [Docker Hub](https://ghcr.io/aisystant/ssm2025)