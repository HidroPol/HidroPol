const router = require("express").Router()
const controller = require('../controllers/hidropolControlling')

router.get("/", controller.index);
  
router.post("/login", controller.login);

router.get("/controling", controller.controling);

router.post("/controling", controller.postControling);

router.get("/about", controller.about);

router.use((req, res, next) => {
  res.render("404");
});

module.exports = router