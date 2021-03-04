//* needs to be updated for our data

const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function (req, res) {
    db.TaxData.find(req.query)

      .then((taxdata) => res.json(taxdata))
      .catch((err) => res.status(422).json(err));
  },
};
