const express = require("express")
const allProducts  = require("../controllers/products");
const savedata = require("../controllers/addproduct");
const specificProduct = require("../controllers/getspecificproduct");
const router = express.Router()

router.get("/allproducts", allProducts)
router.post("/addproduct", savedata)
router.get("/product", specificProduct)


module.exports = router