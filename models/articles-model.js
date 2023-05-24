import mongoose from "mongoose";
// import articles from './user'

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: "Title is required",
  },
  content: {
    type: String,
    required: "Content are required",
  },
  author: {
    type: String,
    required: false,
  },

  image: {
    type: String,
    required: false,
  },
  articleId: {
    type: String,
    required: "Please provide an Id",
  },
  comment: {
    type: Array,
    default: [],
  },
});

export default mongoose.model("articles", articleSchema);
