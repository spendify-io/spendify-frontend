const express = require("express");
const router = express.Router();

const {
  signUpUser,
  loginUser,
  getUser,
} = require("../controllers/userController");

const protect = require("../middlewares/auth");

router.post("/signup", signUpUser);
router.post("/login", loginUser);
router.get("/user", protect, getUser);

module.exports = router;
