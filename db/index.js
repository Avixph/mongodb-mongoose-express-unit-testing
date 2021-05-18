const mongoose = require("mongoose");

require("dotenv").config();

let MONGODB_URI =
  process.env.PROD_MONGODB ||
  process.env.MONGODB_URI ||
  "mongodb://127.0.0.1:27017/wishListDatabase";

mongoose
  .connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Sucessfull Connection to MongoDB!!");
  })
  .catch((e) => {
    console.error("Connection Error!", e.message);
  });

mongoose.set("debug", true);
const db = mongoose.connection;

module.exports = db;
