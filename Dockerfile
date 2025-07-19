# Alternative production-optimized Dockerfile
# Multi-stage build with better caching and security
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies first (better caching)
COPY package*.json ./
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build

# Production stage with nginx
FROM nginx:1.25-alpine AS production

# Install security updates
RUN apk upgrade --no-cache

# Create non-root user for nginx
RUN addgroup -g 1001 -S nginx-user && \
    adduser -S -D -H -u 1001 -h /var/cache/nginx -s /sbin/nologin -G nginx-user -g nginx-user nginx-user

# Copy built site
COPY --from=builder --chown=nginx-user:nginx-user /app/.vitepress/dist /usr/share/nginx/html

# Copy nginx configuration
COPY --chown=nginx-user:nginx-user nginx.conf /etc/nginx/nginx.conf

# Create necessary directories and set permissions
RUN mkdir -p /var/cache/nginx /var/log/nginx /tmp && \
    chown -R nginx-user:nginx-user /var/cache/nginx /var/log/nginx /etc/nginx /usr/share/nginx/html /tmp && \
    chmod -R 755 /usr/share/nginx/html && \
    chmod 777 /tmp

# Switch to non-root user
USER nginx-user

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:8080/health || exit 1

EXPOSE 8080

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
