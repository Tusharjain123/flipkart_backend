const express = require("express")
const allProducts  = require("../controllers/products");
const router = express.Router()


router.get("/allproducts", allProducts)


module.exports = router