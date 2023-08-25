const { getCharById } = require("../controllers/getCharById");
const routerSearch = require("express").Router();

routerSearch.get("/onsearch/:id", getCharById);

module.exports = routerSearch;
