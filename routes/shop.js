const path = require("path");

const express = require("express");

const { renderShop } = require("../controllers/shop.controller");

const router = express.Router();

router.get("/", renderShop);

module.exports = router;
