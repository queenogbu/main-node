const express = require('express');
const bodyParser = require('body-parser');

// initialize express
const app = express()
app.use(express.static(__dirname + "/public"))
app.use(bodyParser.urlencoded({ extended: true }))


// index route 
app.get("/", (req,res)=>{
  res.sendFile(`${__dirname}/index.html`);
})

app.get("/about", (req,res)=>{
  res.sendFile(`${__dirname}/about.html`);
})

app.get("/contact-us", (req,res)=>{
  res.sendFile(`${__dirname}/contact-us.html`);
})

// for form post requests
app.post("/post", (req,res)=>{
  console.log(req.body);
  res.send("posted")
})


const port = 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})