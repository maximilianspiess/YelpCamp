const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./helpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});


const sample = array => array[Math.floor(Math.random() * array.length)]

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor((Math.random() * 20) + 10)
        const camp = new Campground({
            title: `${sample(descriptors)} ${sample(places)}`,
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            image: 'https://source.unsplash.com/collection/483251',
            description: 'Monocle ipsum dolor sit amet marylebone soft power business class ryokan. Exquisite ryokan punctual bulletin impeccable Ginza. Sophisticated remarkable smart, lovely tote bag Sunspel Lufthansa bureaux joy elegant Melbourne extraordinary vibrant ANA. Winkreative delightful signature, Muji impeccable efficient Scandinavian Shinkansen destination. Soft power the highest quality extraordinary, elegant signature Baggu Lufthansa airport sleepy Shinkansen eclectic tote bag.',
            price
        })
        await camp.save();
    }
    console.log("Database seeded.")
}

seedDB().then(() => {
    console.log("Closing connection...");
    mongoose.connection.close();
})