const express = require("express");
const path = require("path");
const PORT = 8080

const app = express();

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { title: "Hidropol" });
});

app.post("/login", (req, res) => {
  res.send("login");
});

app.get("/controling", (req, res) => {
  res.render("controling", { title: "Hidropol | Controlling" });
});

app.post("/controling", (req, res) => {
  res.send("controling", { title: "Hidropol | Controlling" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "Hidropol | About" });
});

app.use((req, res, next) => {
  res.render("404");
});

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
