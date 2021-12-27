// require('dotenv').config()
// const firebase = require('firebase/firebase-app')
// require('firebase/auth');
// require('firebase/database');

// const firebaseConfig = {
//     apiKey: process.env.APIKEY,
//     authDomain: process.env.AUTHDOMAIN,
//     databaseURL: process.env.DATABASEURL,
//     projectId: process.env.PROJECTID,
//     storageBucket: process.env.STORAGEBUCKET,
//     messagingSenderId: process.env.MESSAGINGSENDERID,
//     appId: process.env.APPID
// };
// const app = firebase(firebaseConfig)

// module.exports = app

exports.index = (req, res) => {
        res.render("index", { title: "Hidropol" });
}

exports.login = (req, res) => {
    res.send("login");
}

exports.controling = (req, res) => {
    res.render("controling", { title: "Hidropol | Controlling" });
}

exports.postControling = (req, res) => {
    res.send("controling", { title: "Hidropol | Controlling" });
}

exports.about = (req, res) => {
    res.render("about", { title: "Hidropol | About" });
}