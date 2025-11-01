# Booked Scheduler Installation

## Quick Setup

The Booked service is configured but needs the Booked files to be installed.

### Steps:

1. **Download Booked Scheduler:**
   ```bash
   cd booked
   wget https://github.com/tssg/bookedscheduler/releases/latest/download/bookedscheduler.zip
   unzip bookedscheduler.zip
   ```

2. **Extract so Web/ directory is at: `./booked/Web/`**

3. **Set permissions:**
   ```bash
   chmod -R 755 booked/
   ```

4. **Restart Booked service:**
   ```bash
   cd ..
   ./manage.sh restart booked
   ```

### Alternative: Disable Booked for now

If you don't need Booked yet, comment it out in `docker-compose.yml`:
```yaml
include:
  # - docker-compose.booked.yml
```

Then restart: `./manage.sh restart`

