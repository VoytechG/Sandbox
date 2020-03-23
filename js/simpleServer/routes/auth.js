/* eslint-disable no-unused-vars */
const express = require("express");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../middleware/auth");

const router = express.Router();

router.post(
  "/register",
  [
    check("username", "Username is required")
      .not()
      .isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
      return res.status(400).json({
        validationErrors: validationErrors.array().map(err => err.msg)
      });
    }

    const { username, email, password } = req.body;
    console.log("received correct credentials");

    try {
      /**
       * Real life TODO
       * Check if user exists in the database
       * e.g. with mongoose:
       * const user = await User.findOne({email});
       * if (user) {
       *    res.status(400).json({ errors: [{ msg: "User already exists" }] });
       * }
       * ...
       * conts user = ...
       * await user.save();
       */

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      /**
       * Saving the user would happen here
       */

      const payload = {
        user: {
          id: "mockid"
        }
      };

      jwt.sign(
        payload,
        config.get("jwtSecretKey"),
        {
          expiresIn: config.get("jwtTokenValidityInSeconds")
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

router.get("/login", [
  check("email", "Please include a valid email").isEmail(),
  check("password", "Please enter a password")
    .not()
    .isEmpty(),
  (req, res) => {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
      return res.status(400).json({
        validationErrors: validationErrors.array().map(err => err.msg)
      });
    }

    /**
     * normally you would search for a user here
     * compare passwords, generate token
     */
    try {
      const payload = {
        user: {
          id: "mockid"
        }
      };

      jwt.sign(
        payload,
        config.get("jwtSecretKey"),
        {
          expiresIn: config.get("jwtTokenValidityInSeconds")
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
]);

router.get("/test", auth, (req, res) => res.send("Auth test route"));

module.exports = router;
