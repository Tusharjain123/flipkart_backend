const Product = require("../models/productSchema")

async function getLatestPurchasedProducts(req, res) {
    try {
      const purchasedProducts = await Product.find({ click: "purchased" })
        .sort({ createdAt: -1 }) // Sorting by createdAt in descending order to get the latest products first
        .limit(5); // Limiting the result to 5 products
        const interestedProducts = await Product.find({ click: "interested" })
        .sort({ createdAt: -1 }) // Sorting by createdAt in descending order to get the latest products first
        .limit(5);

      res.json({'interested': interestedProducts, 'purchased': purchasedProducts});
    } catch (error) {
      console.error("Error fetching purchased products:", error);
      throw error;
    }
  }

module.exports = getLatestPurchasedProducts;