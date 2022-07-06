const express = require('express');
const app = express();
const morgan = require('morgan');
const AppError = require('./AppError');


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
    
    throw new AppError("Password required", 401)
}

app.get('/', (req, res) => {
    res.send("This is da homepage")
})

app.get('/dogs', (req, res) => {
    res.send("Woof woof")
})

app.get('/error', (req, res) => {
    chicken.fly()
})

app.get('/secret', verify_pass, (req, res) => {
    res.send("Sometimes I sit in the shower for 10 minutes because I like it")
})

app.get('/mistake', (req, res) => {
    tofu.eat()
})

app.get('/admin', (req, res) => {
    throw new AppError('You are not an admin', 403)
})

// app.use((err, req, res, next) => {
//     console.log("YAAAAAAAAAAAAAAAAAAAAAAAAAY")
//     console.log("YAAAAAAAAAASHITAAAAAAAAAAAY")
//     console.log("YAAAAAAAAAAAAAAAAAAAAAAAAAY")
//     next(err);
// })

app.use((err, req, res, next) => {
    const { status = 500, message = 'Something went wrong' } = err;
    res.status(status).send(message)
})

app.use((req, res) => {
    res.status(404).send('NOT FOUND!')
})

app.listen(3000, () => {
    console.log("App running on localhost:3000");
})