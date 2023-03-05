const router = require("express").Router();

const User = require("../model/User");

const { compare } = require("bcrypt");

const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET || "Group 17";

const { body, validationResult } = require("express-validator");

router.post(
  "/login",
  body("name")
  .isAlpha()
  .withMessage("Name should be Alpha")
  .isLength({ min: 3 })
  .withMessage("Name should be greater then 2"),
  body("password")
  .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
  .withMessage('Password must contain at least 8 characters including one letter and one number')
  .isString({ min: 6 }),
  async (req, res) => {
    try {
      const inputErrors = validationResult(req);
      if (!inputErrors.isEmpty()) {
        return res.status(400).json({
          status: "failed",
          message: "invalid data for user login",
          errors: inputErrors.array(),
        });
      }
      const { email, password } = req.body; 

      const user = await User.findOne({ email });
        

      if (!user) {
        res.status(400).json({
          status: "failed",
          message: "no such user exists give valid email/phone",
        });
      } else {
        //compare the password
        const result = await compare(password, user.password);
        if (!result) {
          res.status(400).json({
            status: "failed",
            message: "wrong credentials",
          });
        } else {
          //user exists and correct password
          //generate accessToken with id
          const accessToken = jwt.sign(
            { email: user.email, id: user.id },
            SECRET,
            { expiresIn: "30d" }
          );

          res.json({
            status: "success",
            message: "succefully logged in",
            token: accessToken,
          });
        }
      }
    } catch (err) {
      res.status(500).json({
        status: "failed",
        errors: err.message,
      });
    }
  }
);

module.exports = router;