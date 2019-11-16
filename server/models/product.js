const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
    title: { type: String, required: [true,'Product Title is Required']},
    price: { type: Number, required: [true,'Product Price is required']},
    url:{ type: String, required: false },
    },{timestamps: true }
);
mongoose.model('Product', ProductSchema);


