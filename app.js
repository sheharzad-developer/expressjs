const express = require('express');
const app = express();
const port = 5000;

app.get('/home', (req, res) => {
    res.send("Home Page")
})

app.get('/signup', (req,res) => {
    res.send("Welcome to Sign up")
})

app.get('/signin', (req,res) => {
    res.send("Welcome to Sign In")
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})


