# MERN Portfolio Website

A full-stack personal portfolio website built with the MERN stack:

- `frontend/`: React + Vite + Tailwind CSS + Framer Motion
- `backend/`: Node.js + Express + MongoDB + Mongoose

The project includes a professional responsive UI, light/dark mode toggle, dynamic project API support, and a MongoDB-backed contact form for Manish Washimkar's portfolio.

## Project Structure

```text
Portfolio/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── utils/
│   │   ├── app.js
│   │   └── server.js
│   ├── .env.example
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .env.example
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
├── package.json
└── README.md
```

## Features

- Responsive, minimal portfolio design
- Light and dark mode with local persistence
- Smooth section transitions using Framer Motion
- Sticky navigation with smooth scrolling
- Dynamic project cards loaded from the backend API
- Contact form with client-side and server-side validation
- Express MVC structure with centralized error handling
- MongoDB models for `Contacts` and `Projects`
- Environment-based API configuration
- Deployment-ready structure for Vercel/Netlify + Render/Railway + MongoDB Atlas

## Local Setup

### 1. Install dependencies

Install root tooling and app dependencies:

```bash
npm install
cd backend && npm install
cd ../frontend && npm install
```

### 2. Configure environment variables

Create these files from the examples:

```bash
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
```

Update the values:

- `backend/.env`
  - `PORT=5000`
  - `MONGODB_URI=<your-mongodb-atlas-uri>`
  - `CLIENT_URL=http://localhost:5173`
- `frontend/.env`
  - `VITE_API_URL=http://localhost:5000/api`

### 3. Run the apps

Option A: run both from the project root

```bash
npm run dev
```

Option B: run separately

```bash
cd backend && npm run dev
cd frontend && npm run dev
```

Frontend default URL: `http://localhost:5173`

Backend default URL: `http://localhost:5000`

## API Endpoints

### `GET /api/health`

Returns a simple server health response.

### `GET /api/projects`

Returns project data from MongoDB. If the `projects` collection is empty, the API returns default sample projects from `backend/src/utils/defaultProjects.js`.

### `POST /api/contacts`

Stores a contact form submission in MongoDB.

Request body:

```json
{
  "name": "John Doe",
  "email": "manishwashimkar45@gmail.com",
  "message": "I would like to discuss a portfolio project."
}
```

Validation rules:

- `name`: required, 2-80 chars
- `email`: required, valid email
- `message`: required, 10-1200 chars

## MongoDB Collections

- `contacts`
- `projects`

## Deployment Guide

### Frontend deployment

Deploy `frontend/` to Vercel or Netlify.

- Build command: `npm run build`
- Output directory: `dist`
- Environment variable:
  - `VITE_API_URL=https://your-backend-domain.com/api`

### Backend deployment

Deploy `backend/` to Render or Railway.

- Start command: `npm start`
- Environment variables:
  - `PORT=5000`
  - `MONGODB_URI=<mongodb-atlas-uri>`
  - `CLIENT_URL=https://your-frontend-domain.com`
    - Multiple frontend origins can be comma-separated, for example `http://localhost:5173,https://manishwashimkar.vercel.app`

### MongoDB Atlas

1. Create a cluster.
2. Create a database user.
3. Whitelist your deployment provider IPs or allow trusted access.
4. Copy the connection string into `MONGODB_URI`.

## Customization Notes

- Replace any remaining sample project URLs if your live demos or production repo links differ.
- Add your production domain as the canonical URL in `frontend/src/pages/HomePage.jsx` once deployed.
- Replace sample projects with real entries in MongoDB when ready.

## Suggested Next Steps

1. Add your own project screenshots and resume link.
2. Seed the `projects` collection with your production portfolio content.
3. Connect a transactional email service if you want contact notifications in addition to database storage.
