const mongoose =require("mongoose")
const {Schema} = mongoose
const ProductSchema = new Schema({
    brand: {
        type: String,
        required: true
    }, 
    name: {
        type: String,
        required: true,
    },
    rating : {
        type : Number,
        required: true
    },
    review: {
        type: Object,
        required: true
    },
    image: {
        type: String,
        required : true
    },
    price: {
        type: Number,
        required : true
    },
    breadcrumbs: {
        type: String,
        required : true
    }
})

module.exports = mongoose.model("product", ProductSchema)