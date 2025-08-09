# MERN URL Shortener

A simple URL shortener built with the **MERN stack** (MongoDB, Express, React, Node.js).

This project allows users to generate short URLs for any valid link, and redirect back to the original destination. You can use a local MongoDB database with **MongoDB Compass** 
***

## Features

- Generate short URLs for any valid long URL
- Instant redirect with a single click
- REST API with Express and MongoDB
- React frontend (hot reload)
- Works with local MongoDB

***

## Project Structure

```
url-shortener/
 ├── client/         # React frontend
 ├── server/         # Express backend
 ├── package.json    # Root-level, for running both together
 └── README.md
```

***

## Prerequisites

- Node.js and npm installed
- MongoDB installed **locally** (for MongoDB Compass usage)

***

## Local Setup (Use with MongoDB Compass)

1. **Clone the repository**
   ```
   git clone https://github.com/satyamkumar052/URL_Shortner.git
   cd url-shortener
   ```

2. **Install backend dependencies**
   ```
   cd server
   npm install
   ```

3. **Start your local MongoDB server**  
   (If you want to view/edit, open with MongoDB Compass.)

4. **Start the backend server**
   ```
   nodemon index.js
   ```
   Runs at: `http://localhost:5000`

5. **Open a new terminal and install frontend dependencies**
   ```
   cd ../client
   npm install
   npm start
   ```
   Runs at: `http://localhost:3000`

***

## Running Both Servers with One Command

If you want to start both backend and frontend together:

1. **At the root (where `client/` and `server/` are):**
   ```
   npm install concurrently --save-dev
   ```

2. **Add this script to your root `package.json`:**
   ```
   "scripts": {
     "dev": "concurrently \"cd server && nodemon index.js\" \"cd client && npm start\""
   }
   ```

3. **Now run:**
   ```
   npm run dev
   ```

***

## API Endpoints

- **POST** `/api/shorten`  
  Request JSON: `{ "originalUrl": "https://example.com" }`  
  Response: `{ "shortUrl": "http://localhost:5000/xyz123" }`

- **GET** `/:shortId`  
  Redirects to the long/original URL.

***

## Notes

- Add `.env` and `node_modules/` to `.gitignore`
- Use `nodemon` for backend auto-reload, React dev server for frontend reload
- For MongoDB Compass, connect to `mongodb://localhost:27017` for full data viewing
- For cloud/Atlas, share your `.env.example` (not real creds) for collaborators

***


## Author

Satyam Kumar 
GitHub: https://github.com/satyamkumar052