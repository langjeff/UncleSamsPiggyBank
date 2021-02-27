const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taxSchema = new Schema({
  type: { type: String, required: true },
  desc: { type: String, required: true },
  addInfo: {type: String, required: true},
  percentage: { type: Double, required: true },
}, {
  collection: "taxdata"
});

const TaxData = mongoose.model("TaxData", taxSchema);

module.exports = TaxData;
