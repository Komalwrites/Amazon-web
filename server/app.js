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

app.use(router);

const port = process.env.PORT || 8005; //created port

app.listen(port,()=>{
    console.log(`Server is running on port number ${port}`);
});

DefaultData();
