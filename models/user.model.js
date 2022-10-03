const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please add the first name"],
      unique: true,
      trim: true,
      minlength: 1,
    },
    lastName: {
      type: String,
      required: [true, "Please add the last name"],
      unique: true,
      trim: true,
      minlength: 1,
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
      trim: true,
      minlength: 3,
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
      minlength: 3,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
