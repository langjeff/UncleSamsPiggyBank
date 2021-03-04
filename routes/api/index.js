const router = require("express").Router();
const taxRoutes = require("./taxdata");

//* routes for each api, that then use the controller.
router.use("/tax", taxRoutes);

module.exports = router;
