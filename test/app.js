const express = require('express');
const app = express();
const morgan = require('morgan');


app.use(morgan('dev'));
app.use((req, res, next) => {
    console.log("MIDDLEWARE BABYYYYYY");
    next();
})

app.use('/dogs', (req, res, next) => {
    console.log("GOTTA LOVE'EM DAAAAWGS")
    next();
})

const verify_pass = (req, res, next) => {
    const { password } = req.query;
    if (password === 'veganyay') {
        next();
    }
    res.send('Sorry, you need a password (bitch...)');
}


app.get('/dogs', (req, res) => {
    res.send("Ich wünsch dir gute Reise...");
})

app.get('/reise', (req, res) => {
    res.send("...wohin es dich auch trägt...");
})

app.get('/secret', verify_pass, (req, res) => {
    res.send("Sometimes I sit in the shower for 10 minutes because I like it");
})

app.listen(3000, () => {
    console.log("App running on localhost:3000");
})

app.use((req, res) => {
    res.send('NOT FOUND!')
})