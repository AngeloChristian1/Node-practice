import articleSchema from "../models/articles-model.js";
import userSchema from "../models/users-model.js";

const getUser = (req, res) => {
  try {
    res.send("createArticle");
  } catch (error) {
    console.log("Error occured in createArticle: ", error);
  }
};
const createUser = (req, res) => {
  try {
    res.send("createArticle");
  } catch (error) {
    console.log("Error occured in createArticle: ", error);
  }
};

const updateUser = async (req, res) => {
  try {
    const data = req.body;
    const userInstance = new userSchema({
      name: data.name,
      email: data.email,
      password: data.password,
      userId: data.userId,
    });
    let response = await userInstance.save();
    res.status(200).json({
      message: "Article created successfully",
      error: null,
      data: response,
    });
  } catch (error) {
    console.log("Error occured in createArticleController: ", error);
    res.status(500).json({
      message: "Error occured",
      error: error,
      data: null,
    });
  }
};
export { getUser, createUser, updateUser };
