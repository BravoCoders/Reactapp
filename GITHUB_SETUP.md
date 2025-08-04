# GitHub Setup Guide for KisanMitra Smart Farming App

## Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Repository settings:
   - **Repository name**: `kisanmitra-smart-farming-app`
   - **Description**: `AI-powered farming assistant with bilingual support, plant disease detection, weather forecasting, and educational workshops`
   - **Visibility**: Public (recommended for Vercel deployment)
   - **Initialize**: Don't initialize with README (we have files ready)

## Step 2: Push Code to GitHub

Open a terminal and run these commands:

```bash
# Remove any existing git locks (if needed)
rm -f .git/index.lock
rm -f .git/config.lock

# Initialize git repository
git init

# Add your GitHub repository as origin (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/kisanmitra-smart-farming-app.git

# Add all files to staging
git add .

# Commit your code
git commit -m "Initial commit: KisanMitra Smart Farming App

- AI-powered farming assistant with bilingual support (English/Hindi)
- Plant disease detection using OpenAI Vision API  
- Weather forecasting with farming alerts
- Educational video workshops section
- Voice input support for accessibility
- Modern responsive UI with animations and glass-morphism effects
- Full-stack TypeScript implementation with React + Express
- Configured for Vercel deployment
- PostgreSQL database with in-memory fallback"

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Deploy to Vercel from GitHub

### Option A: Vercel Dashboard (Recommended)
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect the settings
5. Add environment variables:
   - `OPENAI_API_KEY`: Your OpenAI API key
   - `NODE_ENV`: `production`
6. Click "Deploy"

### Option B: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login and deploy
vercel login
vercel --prod
```

## Step 4: Set Environment Variables in Vercel

In your Vercel dashboard under Settings > Environment Variables, add:

**Required:**
- `OPENAI_API_KEY`: Your OpenAI API key

**Optional:**
- `DATABASE_URL`: PostgreSQL connection string
- `WEATHER_API_KEY`: OpenWeatherMap API key

## Repository Structure

Your GitHub repository will contain:

```
kisanmitra-smart-farming-app/
├── client/                 # React frontend
├── server/                 # Express backend
├── shared/                 # Shared types and schemas
├── api/                    # Vercel serverless functions
├── vercel.json            # Vercel configuration
├── package.json           # Dependencies and scripts
├── README.md              # Project documentation
├── DEPLOYMENT.md          # Deployment guide
├── .gitignore            # Git ignore rules
└── .env.example          # Environment variables template
```

## Next Steps

After successful deployment:
1. Your app will be live at `https://your-project-name.vercel.app`
2. Test all features in production
3. Share the link with farmers for real-world testing
4. Monitor usage and performance