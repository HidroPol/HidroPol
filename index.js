const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("public"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/monitoring", (req, res) => {
  res.render("monitoring");
});

app.listen(8080, () => console.log("server listening on port 8080"));
