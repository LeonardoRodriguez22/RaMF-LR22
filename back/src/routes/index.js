const  login  = require("../controllers/login");
const  postFavs = require("../controllers/postFavs");
const postUser= require("../controllers/postUser");
const deleteFavs = require("../controllers/deleteFavs");
const router = require("express").Router();

router.get("/login", login);

router.post("/login", postUser);

router.post("/fav", postFavs);

router.delete("/fav/:id", deleteFavs);

module.exports = router;
