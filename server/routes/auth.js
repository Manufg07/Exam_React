const express = require("express");
const router = express.Router();
const User = require("../models/User");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// User registration
router.post("/register", async (req, res) => {
  try {
    // const {} = userDetails
    const userDetails = req.body;
    const username = userDetails.userName;
    const password = userDetails.password;
    const confirm_password = userDetails.confirm_password;
    const email = userDetails.email;
    // const userType = userDetails.userType
    // const { username, password } = req.body;
    if (password !== confirm_password) {
        return res.status(400).json({ error: "Passwords do not match" });
      }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword, email });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.log("err", error);
    res.status(500).json({ error: "Registration failed" });
  }
});

// User login
router.post("/login", async (req, res) => {
  try {
    console.log('Incoming request body:', req.body);
    const { username, password } = req.body;

    console.log(username, password);
    const user = await User.findOne({ username });
    console.log(user, "user");
    if (!user) {
      return res
        .status(401)
        .json({ error: "Authentication failed- User doesn't exists" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res
        .status(401)
        .json({ error: "Authentication failed- password doesn't match" });
    }
    const token = jwt.sign(
      { userId: user._id },
      "your-secret-key",
      {
        expiresIn: "1h",
      }
    );

    res.cookie("Authtoken", token);
    res.json({
      status: true,
      message: "login success",
      token
    //   userType: user.userType
    });
    //  console.log('/login in the bakend res', res)
    return res;
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Login failed" });
  }
});

// Logout
router.get("/logout", (req, res) => {
  res.clearCookie("Authtoken");
  res.status(200).send("Logout successful");
  return res;
});

module.exports = router;
