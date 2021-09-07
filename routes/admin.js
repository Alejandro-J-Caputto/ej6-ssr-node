const express = require("express");

const { loadAdmin, postBook } = require("../controllers/admin.controller");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", loadAdmin);

// /admin/add-product => POST
router.post("/add-product", postBook);

exports.routes = router;
