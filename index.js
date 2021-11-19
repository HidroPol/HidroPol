const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

// app.get("/login", (req, res) => {
//   res.render("login");
// });

app.post("/login", (req, res) => {
  res.send("login");
});

app.get("/controlling", (req, res) => {
  res.render("controlling");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.use((req, res, next) => {
  res.status(404).json({
      message: 'Ohh you are lost, read the API documentation to find your way back home :)'
  })
})

app.listen(8080, () => console.log("server listening on port 8080"));
