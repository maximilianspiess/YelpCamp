const express = require('express');
const app = express();
const morgan = require('morgan');


app.use(morgan('dev'));
app.use((req, res, next) => {
    console.log("MIDDLEWARE BABYYYYYY");
    next();
})


app.get('/', (req, res) => {
    res.send("Ich wünsch dir gute Reise...");
})

app.get('/reise', (req, res) => {
    res.send("...wohin es dich auch trägt...");
})

app.listen(3000, () => {
    console.log("App running on localhost:3000");
})