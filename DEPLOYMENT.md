# 🚀 Vercel Deployment Guide

## Prerequisites
- GitHub account
- Vercel account (free) - Sign up at [vercel.com](https://vercel.com)

## Step 1: Push to GitHub

1. **Initialize Git** (if not already done):
   ```bash
   cd "c:\Users\tabis\OneDrive\Desktop\Anti Portfolio\anti-portfolio"
   git init
   git add .
   git commit -m "Initial commit - Portfolio ready for deployment"
   ```

2. **Create a new repository on GitHub**:
   - Go to [github.com/new](https://github.com/new)
   - Name it: `portfolio` or `anti-portfolio`
   - Keep it public or private (both work with Vercel)
   - Don't initialize with README (you already have files)

3. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

## Step 2: Deploy to Vercel

### Option A: Vercel Dashboard (Easiest)

1. **Go to Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Click "Sign Up" and use your GitHub account

2. **Import Project**:
   - Click "Add New..." → "Project"
   - Select your GitHub repository
   - Click "Import"

3. **Configure Project**:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `.next` (auto-filled)
   - Click "Deploy"

4. **Wait for Deployment**:
   - Vercel will build and deploy your site (takes 2-3 minutes)
   - You'll get a live URL like: `your-project.vercel.app`

### Option B: Vercel CLI (Advanced)

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   cd "c:\Users\tabis\OneDrive\Desktop\Anti Portfolio\anti-portfolio"
   vercel
   ```

4. **Follow prompts**:
   - Set up and deploy? `Y`
   - Which scope? (select your account)
   - Link to existing project? `N`
   - What's your project's name? `anti-portfolio`
   - In which directory is your code located? `./`
   - Want to override settings? `N`

## Step 3: Verify Deployment

1. **Test Your Site**:
   - Visit the URL provided by Vercel
   - Test navigation between pages
   - **Test Admin Panel**: Go to `/admin`
   - Login with password: `Mabish@155`
   - Try adding/editing a project
   - Click "Sync" to save changes

2. **Check CV Download**:
   - Make sure `Tabish Arshad - AI Engineer Resume.pdf` is in the `public` folder
   - Test the download button on the home page

## Step 4: Custom Domain (Optional)

1. **In Vercel Dashboard**:
   - Go to your project
   - Click "Settings" → "Domains"
   - Add your custom domain
   - Follow DNS configuration instructions

## Important Notes

### ✅ What Works on Vercel:
- ✅ All pages and navigation
- ✅ Admin Panel with full functionality
- ✅ Project management (add/edit/delete)
- ✅ Data persistence (saves to `portfolio.json`)
- ✅ CV download
- ✅ 3D background animations
- ✅ Custom scrollbar

### ⚠️ Data Persistence Limitation:
- Changes made via Admin Panel will persist **only during the current deployment**
- When you redeploy (push new code), the `portfolio.json` file resets to the version in your repository
- **Solution**: Always update `portfolio.json` locally and push to GitHub for permanent changes

### 🔄 Automatic Deployments:
- Every time you push to GitHub, Vercel automatically redeploys
- Changes go live in 2-3 minutes
- You'll get email notifications for each deployment

## Troubleshooting

### Build Fails:
```bash
# Run locally first to check for errors
npm run build
```

### Admin Panel Not Saving:
- Check browser console for errors
- Verify you're logged in
- Make sure you clicked "Sync" button

### 404 Errors:
- Clear browser cache
- Check that all files are committed to Git
- Verify `public` folder contains your CV PDF

## Support

- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)

---

**Your portfolio is now ready for deployment! 🎉**
