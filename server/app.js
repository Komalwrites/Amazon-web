require('dotenv').config(); //to use env variables
const express = require('express'); //added package to file
const app = express(); //to use its all functions
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./routes/router');
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

require('./db/conn');
const DefaultData = require('./defaultData');

app.use(express.json());
app.use(cookieParser(""));
const corsOptions = {
  origin: "https://amazon-web-client.onrender.com", 
  credentials: true, 
};

app.use(cors(corsOptions)); //to use different ports for front-end and back-end

// Serve static files from the React app (production build)
app.use(express.static(path.join(__dirname, 'build')));

// All other routes should return the index.html for React Router to handle
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use(router);

const port = process.env.PORT || 8005; //created port

app.listen(port,()=>{
    console.log(`Server is running on port number ${port}`);
});

DefaultData();
