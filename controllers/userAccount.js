import accountSchema from "../models/userAccount-model.js";
import bcrypt from "bcrypt";

const createAccount = async (req, res) => {
  const data = req.body;
  let email = data.email;
  try {
    const salt = await bcrypt.genSalt(5);
    const hashedPassword = await bcrypt.hash(data.password, salt);
    const savedUser = await accountSchema.findOne({ email: email });
    if (savedUser) {
      return res.status(409).json({
        message: "User already exists, try loging in instead",
      });
    }
    const response = new accountSchema({
      name: data.name,
      email: data.email,
      password: hashedPassword,
      phoneNumber: data.phoneNumber,
    });
    const user = await response.save();
    res.json({
      message: "User created successfully",
      hashedPassword: data.password,
      data: user,
      error: null,
    });
  } catch (error) {
    console.log("Error occured  ", error);
    res.status(500).json({
      message: "Error occured, failed to load data",
      error: error,
      data: null,
    });
  }
};
const loginAccount = async (req, res) => {
  const data = req.body;
  let email = data.email;
  try {
    const savedUser = await accountSchema.findOne({ email: email });

    if (savedUser) {
      // const salt = await bcrypt.genSalt(5);
      // const hashedPassword = await bcrypt.hash(data.password, salt);
      // const realPassword = await bcrypt.hashSync(savedUser.password, salt);

      const passwordCompare = bcrypt.compare(data.password, savedUser.password);

      if (!passwordCompare) {
        res.json({
          message: "Wrong Password",
          data: null,
          error: "Wrong Password",
        });
      } else {
        res.json({
          message: "User login successfully",
          data: savedUser,
          error: null,
        });
      }
    } else {
      res.json({
        message: "Don't have account, Create one!",
        data: null,
        error: "User not found",
      });
    }
  } catch (error) {
    console.log("Error occured  ", error);
    res.status(500).json({
      message: "Error occured, failed to load data",
      error: error,
      data: null,
    });
  }
};

const readAccount = async (req, res) => {
  // const data

  try {
    const response = await accountSchema.find();
    res.json({
      message: "Registered users",
      data: response,
      error: null,
    });
  } catch (error) {
    console.log("Error occured  ", error);
    res.status(500).json({
      message: "Error occured, failed to load data",
      error: error,
      data: null,
    });
  }
};

export { createAccount, readAccount, loginAccount };
