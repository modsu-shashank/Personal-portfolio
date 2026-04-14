# Portfolio Website

A modern, fully-functional portfolio website built with HTML, CSS, JavaScript (frontend) and Node.js/Express (backend).

## Quick Start

### Option 1: Use the Batch File (Easiest)
1. Double-click `start-website.bat`
2. Wait for both servers to start
3. Open your browser and go to: `http://localhost:8080`

### Option 2: Manual Start

#### Step 1: Start Backend Server
```bash
cd server
npm run dev
```
- Backend will run on: `http://localhost:5000`

#### Step 2: Start Frontend Server
Open a NEW terminal window:
```bash
cd client
python -m http.server 8080
```
- Frontend will run on: `http://localhost:8080`

#### Step 3: Access the Website
Open your browser and go to: `http://localhost:8080`

## What's Working

- **Frontend**: Modern dark theme portfolio with animations
- **Backend**: REST API with in-memory database
- **Features**:
  - Responsive navigation with mobile menu
  - Hero section with animated elements
  - Skills section (8 skills loaded)
  - Projects section (3 projects loaded)
  - Contact form (saves messages)
  - Footer with current year

## API Endpoints

- `GET /api/skills` - Get all skills
- `GET /api/projects` - Get all projects
- `POST /api/contact` - Submit contact form
- `GET /api/seed` - Seed database (already done)

## Troubleshooting

### "Site can't be reached"
1. Make sure both servers are running
2. Try: `http://127.0.0.1:8080` instead of `http://localhost:8080`
3. Check Windows Firewall settings
4. Try a different browser

### Port already in use
1. Close all terminal windows
2. Wait 30 seconds
3. Try starting again

### Backend not working
1. Make sure you're in the `server` directory
2. Run: `npm install` (if not done already)
3. Check that Node.js is installed

## Technologies Used

**Frontend:**
- HTML5, CSS3, JavaScript (ES6+)
- Font Awesome icons
- Google Fonts (Inter, Outfit)
- Responsive design

**Backend:**
- Node.js, Express
- In-memory database (for demo)
- Nodemailer (for email)
- Express validator

## File Structure

```
portfolio-website/
|-- client/
|   |-- index.html
|   |-- style.css
|   |-- script.js
|   |-- package.json
|-- server/
|   |-- server.js
|   |-- package.json
|   |-- .env
|   |-- config/
|   |-- controllers/
|   |-- models/
|   |-- routes/
|-- start-website.bat
|-- README.md
```

## Development

The website uses an in-memory database for demo purposes. To connect to a real MongoDB database:

1. Update the `MONGO_URI` in `server/.env`
2. The controllers will automatically switch to MongoDB

## License

MIT License
