const Product = require("../models/productSchema")

async function purchaseddata(req, res) {
    try {
        const { brand, name, rating, review, image, price, breadcrumbs,index } = req.body;
        const user = new Product({click:"purchased", name: name, brand: brand, rating: rating, review: review, image: image, price: price, breadcrumbs: breadcrumbs,index:index});
        await user.save();

        res.send("Done").status(200)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
};

module.exports = purchaseddata;