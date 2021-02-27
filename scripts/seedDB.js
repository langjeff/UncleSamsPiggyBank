const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/unclesam");

const taxSeed = [
  {
    type: "",
    desc: "",
    addInfo: "",
    percentage: ,
  },
  {
    type: "",
    desc: "",
    addInfo: "",
    percentage: ,
  },
  {
    type: "",
    desc: "",
    addInfo: "",
    percentage: ,
  },
  {
    type: "",
    desc: "",
    addInfo: "",
    percentage: ,
  },
  {
    type: "",
    desc: "",
    addInfo: "",
    percentage: ,
  },
  {
    type: "",
    desc: "",
    addInfo: "",
    percentage: ,
  },
  {
    type: "",
    desc: "",
    addInfo: "",
    percentage: ,
  },
  {
    type: "",
    desc: "",
    addInfo: "",
    percentage: ,
  },
  {
    type: "",
    desc: "",
    addInfo: "",
    percentage: ,
  },
  {
    type: "",
    desc: "",
    addInfo: "",
    percentage: ,
  },
];

db.Tax.remove({})
  .then(() => db.Tax.collection.insertMany(taxSeed))
  .then((data) => {
    console.log(data.result.n + " Records Inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
