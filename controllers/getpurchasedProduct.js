const Product = require("../models/productSchema")

async function getLatestPurchasedProducts(req, res) {
    try {
      const purchasedProducts = await Product.find({ click: "purchased" })
        .sort({ createdAt: -1 }) 
        .limit(5); 
        const interestedProducts = await Product.find({ click: "interested" })
        .sort({ createdAt: -1 }) 
        .limit(5);

      res.json({'interested': interestedProducts, 'purchased': purchasedProducts});
    } catch (error) {
      console.error("Error fetching purchased products:", error);
      throw error;
    }
  }

module.exports = getLatestPurchasedProducts;