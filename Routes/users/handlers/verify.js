const jwt=require("jsonwebtoken")
const dotenv = require("dotenv");

dotenv.config()

const verify = async (req, res, next) => {
  const tk = req.headers.tk;
  await jwt.verify(tk, process.env.jwt_pass, (err, user) => {
    if (err) {
      console.log(err.message);
      return res.status(500).json({ success: false, result: err.message });
    } else {
      console.log(user);
      req.user = user;
      next();
    }
  });
};

const verifyAdmin = async (req, res, next) => {
  const tk = req.headers.tk;
  console.log(tk)
  await jwt.verify(tk, process.env.jwt_pass, (err, user) => {
    if (err) {
      console.log(err.message);
      return res.status(500).json({ success: false, result: err });
    } else {
        if (!user.isAdmin) {
            return res.status(403).json({ success: false, result: "Only admins can perform this action" });
        } else {
          console.log(user);
          req.user = user;
          next();
        }
    }
  });
};
module.exports={verify, verifyAdmin}