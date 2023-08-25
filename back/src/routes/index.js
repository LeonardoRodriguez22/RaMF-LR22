const  login  = require("../controllers/login");
const  postFavs = require("../controllers/postFavs");
const postUser= require("../controllers/postUser");
const deleteFavs = require("../controllers/deleteFavs");
const router = require("express").Router();
const getUsers = require("../controllers/getUsers")

router.get("/login", login);

router.get("/loginAll", getUsers);

router.post("/login1", postUser);

router.post("/fav", postFavs);

router.delete("/fav/:id", deleteFavs);

module.exports = router;
