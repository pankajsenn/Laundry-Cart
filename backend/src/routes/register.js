const router = require("express").Router();
const { hash } = require("bcrypt");
const { body, validationResult } = require("express-validator");
const User = require("../model/User");

router.post(
  "/register",
  body("name").isLength({ min: 5 }),
  body("email").isEmail(),
  body("password").isString({ min: 6 }),
  body("phone").isLength({ max: 10, min: 10 }),
  body("address").isLength({ min: 5 }),
  body("state").isLength({ min: 3 }),
  body("pincode").isLength({ min: 6, max: 6 }),
  body("district").isLength({ min: 3 }),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          status: "failed",
          message: "invalid  registeration",
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