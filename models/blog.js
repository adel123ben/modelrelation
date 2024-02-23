const mongoose = require("mongoose");


const blogSchema = new mongoose.Schema({
    title:{
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: String,
        unique: true,
        required: true
    }
},{
    timestamps: true
})

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog