const router = require("express").Router();
const { hash } = require("bcrypt");
const { body, validationResult } = require("express-validator");
const User = require("../model/User");

router.post(
  "/register",
  body("name")
  .isAlpha()
  .withMessage("Name should be Alpha")
  .isLength({ min: 3 })
  .withMessage("Name should be greater then 2"),
  body("email")
  .isEmail()
  .withMessage("Its not a valid email"),
  body("password")
  .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
  .withMessage('Password must contain at least 8 characters including one letter and one number')
  .isString({ min: 6 }),
  body("phone")
  .isNumeric()
  .withMessage("Phone number should be number")
  .isLength({ max: 10, min: 10 })
  .withMessage("Phone number length should be 10 digit"),
  body("address")
  .isString()
  .withMessage("Address should be string")
  .isLength({ min: 5 }),
  body("state")
  .isLength({ min: 3 }),
  body("pincode")
  .isNumeric()
  .withMessage("Pincode should not be alphanumeric")
  .isLength({ min: 6, max: 6 })
  .withMessage("length of pincode should be 6 digit number"),
  body("district")
  .isLength({min: 3})
  .withMessage("District name should not be less then 3"),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          status: "failed",
          message: "invalid  registeration",
          errors: errors.array()
        });
      }
      const {
        name,
        email,
        password,
        phone,
        address,
        state,
        district,
        pincode,
      } = req.body;

      const Checkexist = await User.findOne({email});
      if (Checkexist) {
        return res
          .status(400)
          .json({
            status: "failed",
            message: "user already exists",
          });
      }
      const hashing = await hash(password, 10);
      const userdata = new User({
        name,
        email,
        phone,
        password: hashing,
        address: [
          {
            address,
            state,
            district,
            pincode,
          },
        ],
      });

      const registered = await userdata.save();
      if (registered) {
        res.json({
          status: "success",
          message: "user successfully registered",
        });
      }
    } catch (err) {
      res.status(500).json({
        status: "failed",
        message: "server error",
      });
    }
  }
);

module.exports = router;