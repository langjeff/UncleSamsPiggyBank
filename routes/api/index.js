const router = require("express").Router();
const taxRoutes = require("./taxdata");
const userRoutes = require("./users");

//* routes for each api, that then use the controller.
router.use("/tax", taxRoutes);
router.use("/save", userRoutes);


module.exports = router;
