# Deployment Guide - SHASHANK REDDY Portfolio

## Quick Deployment Options

### Option 1: Netlify (Recommended - Easiest)

#### Method A: Drag & Drop
1. **Build your site**: Open your portfolio in browser and save as HTML (or use the existing files)
2. Go to [netlify.com](https://netlify.com)
3. Sign up/login
4. Drag your `client` folder onto the "Sites" area
5. Your site will be live instantly!

#### Method B: Git Integration
1. Push your code to GitHub
2. Connect Netlify to your GitHub account
3. Select your repository
4. Set build settings:
   - **Build command**: (leave blank for static site)
   - **Publish directory**: `client`
5. Click "Deploy site"

### Option 2: Vercel (Also Easy)

#### Method A: Direct Upload
1. Go to [vercel.com](https://vercel.com)
2. Sign up/login
3. Click "New Project"
4. Upload your `client` folder
5. Your site will be live!

#### Method B: Git Integration
1. Push your code to GitHub
2. Connect Vercel to GitHub
3. Select your repository
4. Set framework preset: "Other"
5. Set output directory: `client`
6. Deploy

### Option 3: GitHub Pages (Free)

1. Create a new GitHub repository
2. Upload your `client` folder contents
3. Go to repository Settings > Pages
4. Source: "Deploy from a branch"
5. Branch: `main` / `master`
6. Folder: `/root`
7. Save and wait for deployment

### Option 4: Traditional Hosting

1. Get hosting from providers like:
   - Bluehost
   - HostGator
   - GoDaddy
   - Namecheap
2. Upload `client` folder files via FTP/cPanel
3. Point your domain to the hosting

## Production Configuration

### Update API URLs for Production

Before deploying, update your API base URL in `client/script.js`:

```javascript
// Line 45-47 in script.js
const API_BASE = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' 
    ? 'http://localhost:5000/api' 
    : 'https://your-backend-url.com/api'; // Update this
```

### Backend Deployment Options

#### Option A: Keep Backend Local
- Use the portfolio as a static site
- Contact form will show "network error" but still looks professional
- Remove contact form or make it open email client

#### Option B: Deploy Backend
- Deploy to Heroku, Render, or Railway
- Update frontend API URL
- Both frontend and backend will be fully functional

## Step-by-Step Netlify Deployment (Recommended)

### Step 1: Prepare Your Files
```bash
# Create a production-ready folder
mkdir portfolio-deploy
cp -r client/* portfolio-deploy/
```

### Step 2: Deploy via Drag & Drop
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the `portfolio-deploy` folder
3. Wait for deployment
4. Get your live URL!

### Step 3: Custom Domain (Optional)
1. Go to Site settings > Domain management
2. Add your custom domain
3. Update DNS records as instructed

## Alternative: Static-Only Version

If you want a simpler deployment without backend:

### Remove Backend Dependencies
1. Open `client/script.js`
2. Comment out or remove API calls
3. Replace dynamic content with static HTML

### Static Contact Form
Replace the contact form with:
```html
<a href="mailto:shashankreddy417@gmail.com" class="btn btn-primary">
    Send Me an Email
</a>
```

## Deployment Checklist

- [ ] Update all personal information
- [ ] Test all links work
- [ ] Check responsive design
- [ ] Update API URLs for production
- [ ] Test contact form (or replace with email link)
- [ ] Optimize images
- [ ] Check loading speed
- [ ] Test on mobile devices

## Free Hosting Options

1. **Netlify** - Best for static sites
2. **Vercel** - Great performance
3. **GitHub Pages** - Free with GitHub
4. **Firebase Hosting** - Google's free tier
5. **Surge.sh** - Simple deployment

## Paid Hosting for Full-Stack

1. **Heroku** - Easy backend deployment
2. **Render** - Modern alternative to Heroku
3. **Railway** - Simple full-stack deployment
4. **DigitalOcean** - Full control VPS

## Quick Deploy Commands

### Netlify CLI
```bash
npm install -g netlify-cli
cd client
netlify deploy --prod --dir .
```

### Vercel CLI
```bash
npm install -g vercel
cd client
vercel --prod
```

## Post-Deployment

1. **Test your live site** thoroughly
2. **Check all links** work properly
3. **Test contact form** functionality
4. **Monitor performance** with Google PageSpeed
5. **Set up analytics** (Google Analytics)
6. **Add to resume** and LinkedIn

## Troubleshooting

### Common Issues:
- **404 errors**: Check file paths and build settings
- **API errors**: Update backend URL for production
- **Styling issues**: Check CSS file paths
- **Slow loading**: Optimize images and enable caching

### Solutions:
1. Check browser console for errors
2. Verify all file paths are correct
3. Test with different browsers
4. Check mobile responsiveness

Your portfolio is now ready to deploy! Choose the option that works best for you.
