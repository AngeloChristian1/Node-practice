import articleSchema from "../models/articles-model.js";
import commentSchema from "../models/comments-model.js";
const createArticle = (req, res) => {
  try {
    res.send("createArticle");
  } catch (error) {
    console.log("Error occured in createArticle: ", error);
  }
};

// const readArticle = async (req, res) => {
//   try {
//     const name = req.params.searchName;
//     const list = ["John", "Peter", "Albert", "Robert", "Christian"];
//     let nameExit = list.includes(name);
//     res.send(nameExit);
//   } catch (error) {
//     console.log("Error occured in readArticle: ", error);
//   }
// };
const readArticle = async (req, res) => {
  try {
    const blogId = req.params.searchName;
    const query = { _id: blogId };
    const response = await articleSchema.find(query);
    if (response.length == 0) {
      res.status(404).json({
        message: "Data fetched, nothing was found ",
        data: response,
        error: "no data found",
      });
    } else {
      res.status(200).json({
        message: "Retrieved successfully",
        data: response,
        error: null,
      });
    }
  } catch (error) {
    console.log("Error occured in readArticle: ", error);
    res.status(500).json({
      message: "Eror occured",
      error: error,
      data: null,
    });
  }
};

let comment = [
  {
    name: "Albert",
    commentContent: "This is a comment",
  },
];

const readArticlesLimited = async (req, res) => {
  try {
    let page = req.query.page || 1;
    let range = req.query.limit || 3;
    let limitation = range * page;
    let start = limitation - range;

    let response = await articleSchema.find({}).skip(start).limit(range);
    res.status(200).json({
      message: "Data Retrieved successfully",
      data: response,
      error: null,
    });
  } catch (error) {
    console.log("Error occured in createArticleLimit: ", error);
    res.status(500).json({
      message: "Error occured, failed to load data",
      error: error,
      data: null,
    });
  }
};
const updateArticle = async (req, res) => {
  try {
    let articleId = req.params.id;
    let updates = req.body;
    let response = await articleSchema.find({ _id: articleId });
    if (response.length == 0) {
      res.status(404).json({
        message: "Article not found",
        data: null,
        error: null,
      });
    } else {
      let response = await articleSchema.findOneAndUpdate(
        { _id: articleId },
        { $set: updates }
      );

      res.status(200).json({
        message: "Data Updated successfully",
        data: response,
        error: null,
      });
    }
  } catch (error) {
    console.log("Error occured in updateArticle: ", error);
    res.status(500).json({
      message: "Error occured, failed to load data",
      error: error,
      data: null,
    });
  }
};
const deleteArticle = async (req, res) => {
  try {
    let articleId = req.params.id;

    let response = await articleSchema.find({ _id: articleId });
    if (response.length == 0) {
      res.status(404).json({
        message: "Article not found",
        data: null,
        error: null,
      });
    } else {
      let response = await articleSchema.deleteOne({ _id: articleId });

      res.status(200).json({
        message: "Data Updated successfully",
        data: response,
        error: null,
      });
    }
  } catch (error) {
    console.log("Error occured in updateArticle: ", error);
    res.status(500).json({
      message: "Error occured, failed to load data",
      error: error,
      data: null,
    });
  }
};

const createArticleController = async (req, res) => {
  try {
    const data = req.body;
    const articleInstance = new articleSchema({
      title: data.title,
      content: data.content,
      author: data.author || "Angelo Christian",
      image: data.image,
      articleId: data.articleId,
      comment: comment,
    });
    let response = await articleInstance.save();
    res.status(200).json({
      message: "Article created successfully",
      error: null,
      data: response,
      comment: comment,
    });
  } catch (error) {
    console.log("Error occured in createArticleController: ", error);
    res.json({
      message: "Error occured",
      error: error,
      data: null,
    });
  }
};

const commentArticle = async (req, res) => {
  try {
    const data = req.body;
    const commentInstance = new commentSchema({
      name: data.name || "Anonymous",
      comment: data.commentContent,
      articleId: req.params.id,
    });
    let response = await commentInstance.save();
    res.status(200).json({
      message: "Comment created successfully",
      error: null,
      data: response + comment,
    });
  } catch (error) {
    console.log("Error occured in createArticleController: ", error);
    res.json({
      message: "Error occured",
      error: error,
      data: null,
    });
  }
};

export {
  createArticle,
  readArticle,
  createArticleController,
  commentArticle,
  readArticlesLimited,
  updateArticle,
  deleteArticle,
};
