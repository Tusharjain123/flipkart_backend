const Product = require("../models/productSchema")

async function savedata(req, res) {
    try {
        const { brand, name, rating, review, image, price, breadcrumbs,index,user } = req.body;
        const data = new Product({click:"interested", name: name, brand: brand, rating: rating, review: review, image: image, price: price, breadcrumbs: breadcrumbs,index:index, user:user});
        await data.save();

        res.status(200).send('koko')
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
};

module.exports = savedata;