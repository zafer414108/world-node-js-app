const express = require('express');

const app = express();

//For POST Requests
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Routes
app.use('/api', require('./routes/api'));


app.listen('9595',() => {
    console.log('Server started on http://localhost:9595/');
});