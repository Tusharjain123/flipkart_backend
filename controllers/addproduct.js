const Product = require("../models/productSchema")

async function savedata(req, res) {
    try {
        const { brand, name, rating, review, image, price, breadcrumbs } = req.body;
        const user = new Product({ name: name, brand: brand, rating: rating, review: review, image: image, price: price, breadcrumbs: breadcrumbs });
        await user.save();
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
};

module.exports = savedata;