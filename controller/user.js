const User = require("../models/user");

exports.getAllUsers = async (req, res) => {
    try{
        const getUser = await User.find();

        res.status(200).json({ msg: "Get with success", data: getUser });
    }catch(err){
        res.status(500).json({ msg: "can't get users", err: err.message });
    }
}


exports.addNewUser = async (req, res) => {
    try{
        const { name, email, password } = req.body;
        let existeUsers = await User.findOne({ email, name });
        const newuser = new User({ name, email, password });
        const savedUser = await newuser.save();
        if(existeUsers){
            return res.status(400).json({ msg: "User already exists" });
        }else{
            res.status(201).json({ msg: "User added with success", data: savedUser });
        }
        
    }catch(err){
        res.status(500).json({ msg: "can't add user", err: err.message });
    }
}

exports.findUser = async (req, res) => {
    try{
        const id = req.params.id;
        const findUser = await User.findById(id);
        res.status(200).json({ msg: "Get with success", data: findUser });
    }catch(err){
        res.status(500).json({ msg: "can't find user", err: err.message });
    }
}

exports.deleteUser = async (req, res) => {
    try{
        const id = req.params.id;
    await User.findByIdAndDelete(id);
    res.status(200).json({ msg: "User deleted with success" });
    }catch(err){
        res.status(500).json({ msg: "can't delete user", err: err.message });
    }
}

exports.updateUser = async (req, res) => {
    try{
        const { name } = req.body;
        let existName = await User.findOne({ name });
        const id = req.params.id;
        const updatedUser = await User.findByIdAndUpdate(id, { name }, {
            new: true,
            useFindAndModify: false
        });
        if(!name) return res.status(400).json({ msg: "Name is required" });
        if(existName) return res.status(400).json({ msg: "Name already exist" });
        res.status(200).json({ msg: "User updated with success", data: updatedUser });
    }catch(err){
        res.status(500).json({ msg: "can't update user", err: err.message });
    }
}

exports.login = async (req, res) => {
    try{
        const { email, password } = req.body;
        const loginUser = await User.findOne({ email, password });
        if(!loginUser) return res.status(400).json({ msg: "User not found" });
        
        res.status(200).json({ msg: "Login with success", data: loginUser });

    }catch(err){
        res.status(500).json({ msg: "can't login user", err: err.message });
    }
}