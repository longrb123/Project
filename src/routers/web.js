const { Router } = require("express");

const { AdminController } = require("../apps/controllers");
// const AdminController = require()
// const userController = require("../apps/controllers/admin/user.controller");

const router = Router();

// router.get("/", userController.login);

router.get("/admin/dashboard", AdminController.dashboard);

router
  .route("/login")
  .get(AdminController.login)
  .post(AdminController.postLogin);

// router.get("/admin/product", ProductController.index);
// router.get("/form", function (req, res) {
// res.render("test/form", { username: "" });
// });

// router.post("/form", function (req, res) {
// // return res.redirect("/");
// res.render("test/form", { username: req.body.username });
// });

module.exports = router;
