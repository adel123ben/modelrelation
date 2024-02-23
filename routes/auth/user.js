const userController = require("../../controller/user");


module.exports = (express) => {
    const router  = express.Router();
    router.get("/", userController.getAllUsers);
    router.post("/signup", userController.addNewUser);
    router.get("/:id", userController.findUser);
    router.delete("/:id", userController.deleteUser);
    router.put("/:id", userController.updateUser);
    router.post("/login", userController.login);
    return router;
}

