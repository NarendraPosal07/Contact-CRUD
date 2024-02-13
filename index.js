const express = require('express');
const body_parser = require('body-parser');
const route = require('./route/route');
const mongoose = require('./db/dataconect');
const controller = require('./controller/controller');
const multer = require('multer');
const port = 3100;
const path = require('path')

let app = express();
app.set('view engine', 'ejs');
app.use(body_parser.urlencoded({ extended: true }));

app.use('/views/uploads', express.static('./views/uploads'));
app.use('/', route);

mongoose

app.listen(port, () => {
    console.log("PORT 3100 IS RUNNING");
})