const router = require("express").Router();
const Results = require("../../controllers/results");

// Matches with client side "/api/user"
router.route("/")
    .post(Results.create)
    .get(Results.findLast)
    .put(Results.update);
    
module.exports = router;
