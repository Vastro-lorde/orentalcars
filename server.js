// Importing necessary modules, routes and functions.
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Declaring necessary variables.|| 5000
require('dotenv').config();
const PORT = process.env.PORT ;
const app = express();
const cors = require('cors');

// middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// express.static(root,[options]);
app.use('/',express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.send("<h1>O Rental Cars</h1>");
});



app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});