const db = require("../models");

// Defining methods for the userController
module.exports = {
  //* this is working
  create: function (req, res) {
    console.log(req.body);
    db.Results.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  //* this is not working
  get: function (req, res) {
    console.log(req.query);
    db.Results.find({
      // username: { $regex: new RegExp(req.query.q, "i") },
    })
      // .then((user) => res.json(user))
      .catch((err) => res.status(422).end());
  },
  //* this is working
  findLast: function(req, res) {
    db.Results.find({}).sort({_id:-1}).limit(1)
      .then(answer => res.json(answer))
      .catch(err => res.status(422).json(err));
  },
  //* this is working
  update: function(req, res) {
    console.log(req.body)
    db.Results
      .findOneAndUpdate({_id: req.body._id}, req.body)
      .then(username => res.json(username))
      .catch(err => res.status(422).json(err));
  },
};
