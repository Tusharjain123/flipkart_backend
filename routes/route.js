const express = require("express")
const allProducts  = require("../controllers/products");
const savedata = require("../controllers/addproduct");
const specificProduct = require("../controllers/getspecificproduct");
const purchaseddata = require("../controllers/purchased");
const getLatestPurchasedProducts = require("../controllers/getpurchasedProduct");
const router = express.Router()


router.get("/allproducts", allProducts)
router.post("/addproduct", savedata)
router.get("/product", specificProduct)
router.post("/purchase", purchaseddata)
router.get("/getpurchased", getLatestPurchasedProducts)

module.exports = router