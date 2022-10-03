const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/user.model");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      /***** Verify the token *****/
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      /***** Get user from the token *****/
      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      console.log(error, 1010);
      res.status(401);
      res.json({ message: "Not authorized" });
      throw new Error("Not authorized");
    }
  }

  if (!token) {
    res.status(401);
    res.json({ message: "Not authorized, no token" });
    throw new Error("Not authorized, no token");
  }
});

module.exports = protect;
