const jwt = require("jsonwebtoken");

/***** Generate token *****/
const generateToken = (userId) => {
  const payload = {
    user: {
      id: userId,
    },
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: 360000, // 1 hour
  });

  return token;
};

module.exports = generateToken;
