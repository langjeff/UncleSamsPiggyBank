//* needs to be updates for our model

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dataSchema = new Schema({
  {
    category: "",
    type: "",
    returns: ,
    base: ,
    rate: ,
    amount: 




  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
