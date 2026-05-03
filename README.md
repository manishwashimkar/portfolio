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
  - `PORT=7001`
  - `MONGODB_URI=<your-mongodb-atlas-uri>`
  - `CLIENT_URL=http://localhost:5173`
- `frontend/.env`
  - `VITE_API_URL=http://localhost:7001/api`

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

Backend default URL: `http://localhost:7001`

### Testing from a mobile phone on local Wi-Fi

When opening the site from a phone, do not use `localhost` in `VITE_API_URL`. On a phone, `localhost` means the phone itself, not your laptop.

1. Find your computer's local IP address, for example `192.168.1.10`.
2. Set `frontend/.env`:

```env
VITE_API_URL=http://192.168.1.10:7001/api
```

3. Start Vite so other devices can reach it:

```bash
npm --prefix frontend run dev -- --host 0.0.0.0
```

4. Open the frontend on your phone:

```text
http://192.168.1.10:5173
```

Keep the backend running on port `7001`.

## API Endpoints

### `GET /api/health`

Returns a simple server health response.

### `GET /api/projects`

Returns project data from MongoDB. If the `projects` collection is empty, the API returns default sample projects from `backend/src/utils/defaultProjects.js`.

### `POST /api/contacts`

Stores a contact form submission in MongoDB.
Submissions are saved in the `contacts` collection with `name`, `email`, `message`, `createdAt`, and `updatedAt` fields.

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

- Root directory: `frontend`
- Build command: `npm run build`
- Output directory: `dist`
- Environment variable:
  - If using the included Vercel API routes, leave `VITE_API_URL` empty or set `VITE_API_URL=/api`
  - Add `MONGODB_URI=<mongodb-atlas-uri>` to the same Vercel project so `/api/contacts` can save submissions
  - If using a separate backend, set `VITE_API_URL=https://your-backend-domain.com/api`

### Backend deployment

Deploy `backend/` to Render or Railway.

- Start command: `npm start`
- Environment variables:
  - `PORT=7001`
  - `MONGODB_URI=<mongodb-atlas-uri>`
  - `CLIENT_URL=https://your-frontend-domain.com`
    - Multiple frontend origins can be comma-separated, for example `http://localhost:5173,https://manishwashimkar.vercel.app`
    - Use `CLIENT_URL=*` only when the contact API should accept browser requests from any website.

For the contact form to collect data from any device, the frontend must use a public backend URL:

```env
VITE_API_URL=https://your-backend-domain.com/api
```

Do not use `localhost` in deployed frontend settings. Phones and other devices cannot reach your laptop's `localhost`.

### MongoDB Atlas

1. Create a cluster.
2. Create a database user.
3. Whitelist your deployment provider IPs or allow trusted access.
4. Copy the connection string into `MONGODB_URI`.
5. After deployment, open `https://your-backend-domain.com/api/health` to confirm the backend is running before testing the contact form.

## Customization Notes

- Replace any remaining sample project URLs if your live demos or production repo links differ.
- Add your production domain as the canonical URL in `frontend/src/pages/HomePage.jsx` once deployed.
- Replace sample projects with real entries in MongoDB when ready.

## Suggested Next Steps

1. Add your own project screenshots and resume link.
2. Seed the `projects` collection with your production portfolio content.
3. Connect a transactional email service if you want contact notifications in addition to database storage.
