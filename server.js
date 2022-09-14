const express = require("express");
const cors = require("cors");
const path = require("path");

require("dotenv").config({ path: path.resolve(__dirname, "./.env") });

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/***** Database connectivity *****/
const connection = require("./config/db");
connection();

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
