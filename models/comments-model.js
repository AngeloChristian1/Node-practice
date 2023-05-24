import mongoose from "mongoose";
// import articles from './user'

const commentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  commentContent: {
    type: String,
    required: false,
  },
  articleId: {
    type: String,
    required: "Article id is required",
  },
});

export default mongoose.model("comments", commentSchema);
