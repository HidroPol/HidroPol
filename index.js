require('dotenv').config()
const express = require("express");
const path = require("path");
const bodyparser = require('body-parser')
const cors = require('cors')
const PORT = process.env.PORT || 8080
const server = require('./routes/hidropolRoutes')
const app = express();

// cors
app.use(cors())

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended : true}))
app.use(bodyparser.json())

// set view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// load assets
app.use(express.static("public"));
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

// load router
app.use(server)

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
