const express = require("express")
const allProducts  = require("../controllers/products");
const savedata = require("../controllers/addproduct");
const router = express.Router()

router.get("/allproducts", allProducts)
router.post("/addproduct", savedata)


module.exports = router