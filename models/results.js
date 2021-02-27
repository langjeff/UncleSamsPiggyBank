const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    type: { type: String, required: true },
    desc: { type: String, required: true },
    addInfo: { type: String, required: true },
    percentage: { type: Double, required: true },
  },
  {
    collection: "userbudgets",
  }
);

const UserBudgets = mongoose.model("UserBudgets", userSchema);

module.exports = UserBudgets;
