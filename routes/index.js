
const Categoryroutes = require("./category")
const express = require('express');
const userRoute  = require('./auth/user');
const BlogRouter = require('./blog');


module.exports = (express) => {
    const router = express.Router();
    router.get("/", (req, res) => {
        res.send('Hello from router!')
    })

    router.use("/category", Categoryroutes(express));
    router.use("/user", userRoute(express));
    router.use("/blog", BlogRouter(express));


    return router;
}