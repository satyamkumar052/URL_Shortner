# MERN URL Shortener

A simple URL shortener built with the **MERN stack** (MongoDB, Express, React, Node.js).

This project allows users to generate short URLs for any valid link, and redirect back to the original destination. You can use a local MongoDB database with **MongoDB Compass** 


## Features

- Generate short URLs for any valid long URL
- Instant redirect with a single click
- REST API with Express and MongoDB
- React frontend (hot reload)
- Works with local MongoDB.



## Project Structure

```
url-shortener/
 ├── client/         # React frontend
 ├── server/         # Express backend
 ├── package.json    # Root-level, for running both together
 └── README.md
```



## Prerequisites

- Node.js and npm installed
- MongoDB installed **locally** (for MongoDB Compass usage)



## Local Setup (Use with MongoDB Compass)

1. **Install backend dependencies**
   ```
   cd server
   npm install
   ```

2. **Start your local MongoDB server**  
   (If you want to view/edit, open with MongoDB Compass.)

3. **Start the backend server**
   ```
   nodemon index.js
   ```
   Runs at: `http://localhost:5000`

4. **Open a new terminal and install frontend dependencies**
   ```
   cd ../client
   npm install
   npm start
   ```
   Runs at: `http://localhost:3000`



## API Endpoints

- **POST** `/api/shorten`  
  Request JSON: `{ "originalUrl": "https://example.com" }`  
  Response: `{ "shortUrl": "http://localhost:5000/xyz123" }`

- **GET** `/:shortId`  
  Redirects to the long/original URL.


## Author

Satyam Kumar 

