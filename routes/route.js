const express = require("express")
const allProducts = require("../controllers/allProducts")
const savedata = require("../controllers/addproduct");
const specificProduct = require("../controllers/getspecificproduct");
const purchaseddata = require("../controllers/purchased");
const getLatestPurchasedProducts = require("../controllers/getpurchasedProduct");
const randProducts = require("../controllers/products")
const router = express.Router()


router.get("/allproducts", allProducts)
router.get("/random",randProducts  )
router.post("/addproduct", savedata)
router.get("/product", specificProduct)
router.post("/purchase", purchaseddata)
router.get("/getpurchased", getLatestPurchasedProducts)

module.exports = router