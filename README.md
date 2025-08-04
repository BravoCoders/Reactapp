# KisanMitra - Smart Farming App

A comprehensive AI-powered farming assistant application with bilingual support (English/Hindi), plant disease detection, weather forecasting, and educational workshops for farmers.

## Features

- **AI Chatbot**: Bilingual farming assistant powered by OpenAI GPT-4o
- **Plant Disease Detection**: Image-based plant disease analysis using AI vision
- **Weather Forecasting**: 7-day weather forecasts with farming alerts
- **Educational Workshops**: Video content organized by farming categories
- **Voice Support**: Voice input for hands-free interaction
- **Mobile-First Design**: Responsive UI optimized for mobile devices

## Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Backend**: Node.js + Express + TypeScript
- **Database**: PostgreSQL with Drizzle ORM (in-memory fallback)
- **AI Services**: OpenAI (GPT-4o, Vision API, Whisper)
- **Styling**: Tailwind CSS + shadcn/ui components
- **State Management**: TanStack Query

## Deployment

### Vercel Deployment

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy to Vercel:
   ```bash
   vercel --prod
   ```

3. Set environment variables in Vercel dashboard:
   - `OPENAI_API_KEY`: Your OpenAI API key
   - `DATABASE_URL`: PostgreSQL connection string (optional)
   - `WEATHER_API_KEY`: OpenWeatherMap API key (optional)

### Environment Variables

Create a `.env` file with:
```env
OPENAI_API_KEY=your_openai_api_key
DATABASE_URL=your_postgresql_url
WEATHER_API_KEY=your_weather_api_key
```

## Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Architecture

- **Frontend**: Modern React SPA with TypeScript
- **Backend**: Express.js API with OpenAI integration
- **Database**: PostgreSQL with automatic fallback to in-memory storage
- **Deployment**: Optimized for Vercel serverless functions

## License

MIT License// test
