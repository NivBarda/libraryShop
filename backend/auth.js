const jwt = require("jsonwebtoken");

module.exports = function verify(req, res, next) {
  try {
    const decoded = jwt.verify(req.cookies.token, "secret");
    console.log(decoded);
    req.username = decoded.username;
    next();
  } catch (error) {
    console.log(error);
    res.status(403).json("forbidden");
  }
};
