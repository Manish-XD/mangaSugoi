const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {type: String, required: true},
    slug: {type: String, required: true, unique: true},
    desc: {type: String, required: true},
    img: {type: String, required: true},
    demographic: {type: String, required: true},
    published: {type: Number, required: true},
    status: {type: String, required: true},
    rating: {type: String, required: true},
    genre: {type: String, required: true},
    bgimg: {type: String, required: true},
    lang: {type: String},
    vol: {type: String},
    price: {type: Number, required: true},
    AvailableQty: {type: Number, required: true},
}, {timestamps: true});


mongoose.models = {}
export default mongoose.model("Product", ProductSchema);