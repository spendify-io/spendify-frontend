const mongoose = require("mongoose");
const path = require("path");

require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.DATABASE_URI);
    console.log(
      `MongoDB database connection established successfully: ${
        /*variable*/ connection.connection.host
      }`
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

/***** Alternate way to connect mongoDB database *****/

// mongoose.connect(process.env.DATABASE_URI, {
//   useNewUrlParser: true,
// });

// const connection = mongoose.connection;

// connection.once("open", () => {
//   console.log("MongoDB database connection established successfully");
// });

module.exports = connectDB;
