require('dotenv').config({path:__dirname+'/.env'})
const port = process.env.PORT || 3000;
const express = require('express');
const app = express();

app.get("/", (req, res,next)=>{
  res.send("works!");
})

app.listen(port, ()=>{
  console.log(`server started at ${port}`);
})
