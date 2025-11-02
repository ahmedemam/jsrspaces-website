# Quick EC2 Deployment - www.jsrspaces.com

One-time deployment script to serve www.jsrspaces.com on EC2.

## 🚀 Quick Deploy (5 Steps)

### 1. Upload Files to EC2

From your local machine:
```bash
# Copy entire jsrspaces-website folder to EC2
scp -i your-key.pem -r jsrspaces-website ubuntu@your-ec2-ip:~/
```

Or use git:
```bash
# On EC2
cd ~
git clone your-repo-url jsrspaces-website
cd jsrspaces-website
```

### 2. Install Prerequisites (First Time Only)

```bash
# On EC2 instance
sudo apt update
sudo apt install -y docker.io docker-compose-plugin nodejs npm
sudo usermod -aG docker $USER
# Log out and back in after this
```

### 3. Build and Deploy

```bash
cd ~/jsrspaces-website
chmod +x deploy-on-ec2.sh
./deploy-on-ec2.sh
```

That's it! The script will:
- Build your website
- Start all services
- Verify everything is running

### 4. Configure DNS

Point your domain to EC2 IP:

```
Type    Name    Value         TTL
A       www     your-ec2-ip   300
A       @       your-ec2-ip   300
```

### 5. Verify

After DNS propagates (5-60 minutes):
- Visit: https://www.jsrspaces.com
- Should see your website with SSL certificate

## 📋 What Gets Deployed

- ✅ **Website**: https://www.jsrspaces.com (React/Vite build)
- ✅ **ERPNext**: https://erp.jsrspaces.com (optional, run `./manage.sh erp-init`)

## 🔄 Updating Website

After making changes:

```bash
cd ~/jsrspaces-website
npm run build
./manage.sh restart website
```

## 🆘 Troubleshooting

**Website not loading?**
```bash
./manage.sh logs website
./manage.sh status
```

**SSL certificate issues?**
```bash
./manage.sh logs proxy
./manage.sh restart proxy
```

**Check if services are running:**
```bash
docker ps | grep jsrspaces
```

## 📝 Important Notes

- **Ports**: Ensure EC2 security group allows ports 80 and 443
- **DNS**: Can take 5-60 minutes to propagate
- **SSL**: First certificate takes 1-5 minutes to generate
- **Build**: Website must be built (`npm run build`) before starting

## 🎯 Services Running

After deployment, you'll have:
- `jsrspaces_proxy` - Caddy (SSL/reverse proxy)
- `jsrspaces_website` - Nginx (serves website from ./build)
- Database containers (if using ERPNext)

Check status: `./manage.sh status`

