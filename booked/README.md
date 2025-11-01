# Booked Scheduler Setup

Booked Scheduler is an open-source resource booking system perfect for coworking spaces.

## Installation Steps

1. **Download Booked Scheduler**:
   ```bash
   cd booked
   wget https://github.com/tssg/bookedscheduler/releases/latest/download/bookedscheduler.zip
   unzip bookedscheduler.zip
   ```

2. **Configure Database**:
   - Database host: `booked_db`
   - Database name: `booked`
   - Username: `booked`
   - Password: `booked_password_change_me` (update in docker-compose.booked.yml)

3. **Update Configuration**:
   - Edit `config/config.php` with database credentials
   - Set timezone and other settings

4. **Set Permissions**:
   ```bash
   chmod -R 755 booked/
   chown -R www-data:www-data booked/
   ```

5. **Start Services**:
   ```bash
   ./manage.sh start
   ```

6. **Access**:
   - URL: `https://booked.jsrspaces.com`
   - Default admin: Run the installation wizard

## Features

- **Resource Booking**: Desks, meeting rooms, equipment
- **Member Self-Service**: Members can book resources themselves
- **Recurring Bookings**: Set up recurring reservations
- **Calendar Integration**: Sync with external calendars
- **Email Notifications**: Automated booking confirmations
- **Multi-Language**: Supports multiple languages
- **Mobile Friendly**: Responsive design

## Resources

- Official Website: https://www.bookedscheduler.com/
- GitHub: https://github.com/tssg/bookedscheduler
- Documentation: https://www.bookedscheduler.com/documentation/

