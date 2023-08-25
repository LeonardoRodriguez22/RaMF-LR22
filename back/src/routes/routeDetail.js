const { getCharDetail } = require("../controllers/getCharById");
const routerDetail = require("express").Router();

routerDetail.get("/detail/:id", getCharDetail);

module.exports = routerDetail;
