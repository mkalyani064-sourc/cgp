# Career Guidance Platform (CGP)

A full-stack web application for career guidance and assessments. This platform helps students discover their strengths through aptitude tests, personality assessments, and career exploration.

## Features

- 🎯 **Aptitude Testing** - Test your skills and abilities
- 🧠 **Personality Assessment** - Discover your personality type
- 💼 **Career Exploration** - Browse 20+ career paths
- 👨‍💼 **Counsellor Booking** - Book sessions with career counsellors
- 📚 **Resources** - Access curated career resources
- 💝 **Donations** - Support the platform
- 🔐 **User Authentication** - Secure login and registration

## Tech Stack

- **Frontend:** React 18, React Router, CSS
- **Backend:** Express.js, Node.js
- **Database:** MongoDB Atlas
- **Email:** Nodemailer
- **Authentication:** JWT

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account (for database)
- Gmail account (for email functionality)

## Installation

### 1. Clone the repository
```bash
git clone https://github.com/mkalyani064-sourc/cgp.git
cd cgp
```

### 2. Install frontend dependencies
```bash
npm install
```

### 3. Install backend dependencies
```bash
cd backend
npm install
cd ..
```

### 4. Set up environment variables

Create `.env` file in the `backend` folder:
```bash
cp backend/.env.example backend/.env
```

Edit `backend/.env` and add your credentials:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=30d
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_app_password
FRONTEND_URL=http://localhost:3000
```

## Running the Project

### Option 1: Run both servers simultaneously

#### Terminal 1 - Start Backend:
```bash
npm run server
```
Backend runs on: **http://localhost:5000**

#### Terminal 2 - Start Frontend:
```bash
npm start
```
Frontend runs on: **http://localhost:3000**

### Option 2: Run individually

**Backend only:**
```bash
cd backend
npm start
```

**Frontend only:**
```bash
npm start
```

## Available Scripts

### Frontend
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests

### Backend
- `npm run server` - Start with nodemon (auto-reload)
- `npm start` - Start production server

## API Endpoints

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/careers` - Get all careers
- `GET /api/assessment` - Get assessments
- `POST /api/bookings` - Book counsellor session
- `GET /api/counsellors` - Get counsellors
- `GET /api/resources` - Get resources
- `POST /api/donations` - Make donation
- `POST /api/contact` - Send contact message

## Project Structure

```
cgp/
├── backend/
│   ├── config/         # Database & auth config
│   ├── controllers/    # Route controllers
│   ├── models/         # MongoDB models
│   ├── routes/         # API routes
│   ├── middleware/     # Custom middleware
│   ├── utils/          # Utility functions
│   ├── server.js       # Express app
│   └── package.json
├── src/
│   ├── pages/          # React pages
│   ├── components/     # React components
│   ├── App.jsx         # Main app component
│   └── index.js
├── public/             # Static files
└── package.json
```

## Environment Variables

See `backend/.env.example` for required environment variables.

## Deployment

### Frontend (Vercel)
1. Push to GitHub
2. Go to vercel.com
3. Import this repository
4. Deploy with one click

### Backend (Railway)
1. Go to railway.app
2. Connect GitHub account
3. Select `cgp` repo and `backend` folder
4. Add environment variables
5. Deploy

## Contributing

Feel free to fork and submit pull requests.

## License

ISC

## Author

mkalyani064-sourc

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
