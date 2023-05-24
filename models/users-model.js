import mongoose from "mongoose";
// import articles from './user'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Name is required",
  },
  email: {
    type: String,
    required: "Email is required",
  },
  password: {
    type: String,
    required: true,
  },

  userId: {
    type: String,
    required: "Please provide an Id",
  },
});

export default mongoose.model("users", userSchema);
