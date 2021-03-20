const fs = require('fs');
const path = require('path');
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const worksheetsRoutes = require("./routes/worksheets-routes");
const usersRoutes = require("./routes/users-routes");
const HttpError = require("./models/http-error");
const app = express();

app.use(bodyParser.json({limit:'50mb'}));
app.use('/uploads/images', express.static(path.join('uploads','images')));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE')
  next();
});

app.use('/api/users/', usersRoutes);

app.use('/api/worksheets/', worksheetsRoutes);

mongoose
.connect('mongodb+srv://clovy:clovypwd@cluster0.g33ua.mongodb.net/worksheet-creator?retryWrites=true&w=majority')
.then(()=> {
  app.listen(5000);

})
.catch(err => {
  console.log(err)
});
