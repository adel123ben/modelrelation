const Blog = require("../models/blog");

exports.getAllBlogs = async (req, res) => {
    try{
        const blog = await Blog.find();
        if(!blog) return res.status(404).json({ msg: "No Blog in database" });
        res.status(200).json({ msg: "Get with success", data: blog });
    }catch(err){
        res.status(500).json({ msg: "can't get blog", err: err.message });
    }
}

exports.cretaeBlog = async (req, res) => {
    try{
        const { title, description, author } = req.body;
        let exictingBlog = await Blog.findOne({ title });
        if(exictingBlog) return res.status(400).json({ msg: "Blog already exist" });
        const newBlog = new Blog({ title, description, author });
        const savedBlog = await newBlog.save();
        if(!title) return res.status(400).json({ msg: "Title is required" });
        res.status(201).json({ msg: "Blog created with success", data: savedBlog });
    }catch(err){
        res.status(500).json({ msg: "can't create blog", err: err.message });
    }
}

exports.findOneBlog = async (req, res) => {
    try{
        const id = req.params.id;
        const finfblog = await Blog.findById(id);
        if(!finfblog) return res.status(404).json({ msg: "Blog not found" });
        res.status(200).json({ msg: "Get with success", data: finfblog });
    }catch(err){
        res.status(500).json({ msg: "can't find blog", err: err.message });
    }
}

exports.deleteBlog = async (req, res) => {
    try{
        const id = req.params.id;
        const deleteBlog = await Blog.findByIdAndDelete(id);
        if(!deleteBlog) return res.status(404).json({ msg: "Blog not found" });
        res.status(200).json({ msg: "Blog deleted with success" });
    }catch(err){
        res.status(500).json({ msg: "can't delete blog", err: err.message });
    }
}

exports.updateBlog = async (req, res) => {
    try{
        const id = req.params.id;
        const { title } = req.body;
        const updatedBlog = await Blog.findByIdAndUpdate(id, { title }, req.body, {
            new: true,
            useFindAndModify: false
        });
        if(!updatedBlog) return res.status(404).json({ msg: "Blog not found" });
        res.status(200).json({ msg: "Blog updated with success", data: updatedBlog });
    }catch(err){
        res.status(500).json({ msg: "can't update blog", err: err.message });
    }
}