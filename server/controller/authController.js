const User = require("../models/authModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

///// For REgister USer
const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email Already Exist !" });
    }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    ////// Create a new USer
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    ///// Generate a json web token
    //// Jab new user banega tab uske saath token bhi create ho jayega
    const token = jwt.sign({ user: newUser._id }, process.env.JWT_SECRET);
    res.status(201).json({ user: newUser, token });
    // .send({
    //   status: true,
    //   message: "Registration Successfully",
    //   newUser,
    // });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

//// For Login USer

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User Not Found !" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({ message: "Password is not Correct !" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.status(200).json({ user, token });
    // .send({
    //   success: true,
    //   message:"Login Successfull"
    // });
  } catch (error) {
    res.status(500).json({ message: "Somethsi went wrong" });
  }
};

module.exports = { registerUser, loginUser };
