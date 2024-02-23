const blogController = require("../controller/blog");

module.exports = (express) => {
    const router = express.Router();
    router.get("/", blogController.getAllBlogs);
    router.post("/", blogController.cretaeBlog);
    router.get("/:id", blogController.findOneBlog);
    router.delete("/:id", blogController.deleteBlog);
    router.put("/:id", blogController.updateBlog);

    return router;
}