job "ssm2025" {
  # Specify the datacenter and region
  datacenters = ["dc1"]
  region      = "global"
  
  # Job type
  type = "service"
  
  # Update strategy
  update {
    max_parallel      = 1
    min_healthy_time  = "10s"
    healthy_deadline  = "2m"    # Reduced from 3m for faster failure detection
    progress_deadline = "5m"    # Reduced from 10m to prevent long waits
    auto_revert       = false
    canary            = 0
  }
  
  # Migrate strategy
  migrate {
    max_parallel     = 1
    health_check     = "checks"
    min_healthy_time = "10s"
    healthy_deadline = "5m"
  }
  
  group "web" {
    # Number of instances
    count = 1
    
    # Network configuration
    network {
      port "http" {
        static = 8080
      }
    }
    
    # Service registration and health checks
    service {
      name = "ssm2025"
      port = "http"
      
      tags = [
        "nginx",
        "web",
        "frontend",
        "vitepress"
      ]
      
      check {
        name     = "alive"
        type     = "http"
        path     = "/health"
        interval = "10s"
        timeout  = "2s"
      }
    }
    
    # Restart policy
    restart {
      attempts = 2
      interval = "30m"
      delay    = "15s"
      mode     = "fail"
    }
    
    # Ephemeral disk
    ephemeral_disk {
      size = 300
    }
    
    task "ssm2025-web" {
      # Task driver
      driver = "docker"
      
      config {
        # GitHub Container Registry image - will be updated by GitHub Actions
        image = "ghcr.io/aisystant/ssm2025:main"
        
        # Port mapping
        ports = ["http"]
        
        # Force pull latest image
        force_pull = true
        
        # Image pull timeout - prevent hanging on slow/failed pulls
        image_pull_timeout = "5m"
      }
      
      # Environment variables
      env {
        NODE_ENV = "production"
      }
      
      # Resource allocation
      resources {
        cpu    = 100  # 100 MHz
        memory = 128  # 128 MB
        
        # Optionally specify network bandwidth
        # network {
        #   mbits = 10
        # }
      }
      
      # Logs configuration
      logs {
        max_files     = 10
        max_file_size = 15
      }
    }
  }
}
