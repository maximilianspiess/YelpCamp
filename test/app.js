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
    // res.send('Sorry, you need a password (bitch...)');
    throw new Error("Password required")
}

app.get('/', (req, res) => {
    res.send("This da homepage mdfk")
})

app.get('/dogs', (req, res) => {
    res.send("Woof woof");
})

app.get('/reise', (req, res) => {
    res.send("We're going on a trip");
})

app.get('/secret', verify_pass, (req, res) => {
    res.send("Sometimes I sit in the shower for 10 minutes because I like it");
})

app.get('/mistake', (req, res) => {
    tofu.eat()
})

app.listen(3000, () => {
    console.log("App running on localhost:3000");
})

app.use((err, req, res, next) => {
    console.log("YAAAAAAAAAAAAAAAAAAAAAAAAAY")
    console.log("YAAAAAAAAAASHITAAAAAAAAAAAY")
    console.log("YAAAAAAAAAAAAAAAAAAAAAAAAAY")
    next(err);
})

app.use((req, res) => {
    res.send('NOT FOUND!')
})