const categoryControler = require("../controller/categories");

module.exports = (express) => {
    const router = express.Router();
    router.get("/", categoryControler.getAllCategories);
    router.post("/", categoryControler.addNewCategorie);
    router.delete("/:id", categoryControler.deleteCategorie);
    router.put("/:id", categoryControler.updateGategory);
    router.get("/:id", categoryControler.getoneCategorie);
      return router;
}