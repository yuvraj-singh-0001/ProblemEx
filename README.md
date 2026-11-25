# Next.js + Express + MongoDB starter

This project keeps the frontend and API in separate folders:

- `client`: Next.js, React, and Tailwind CSS
- `server`: Node.js, Express, and Mongoose

## Requirements

- Node.js 20.9 or newer
- MongoDB running locally, or a MongoDB Atlas connection string

## Setup

Install the frontend dependencies:

```powershell
cd client
npm install
```

Install the backend dependencies and configure MongoDB:

```powershell
cd ..\server
npm install
Copy-Item .env.example .env
```

Edit `server/.env` and set `MONGO_URI` to your local MongoDB or Atlas URI.

## Run in development

Open two terminals from the project root:

```powershell
npm run dev:server
```

```powershell
npm run dev:client
```

The frontend is available at `http://localhost:3000`. The API health check is
available at `http://localhost:5000/api/health`.

To point the frontend to a different API, create `client/.env.local` and set
`NEXT_PUBLIC_API_URL` (for example, `http://localhost:5000/api`).
