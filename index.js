import express from "express";
// import bodyParser from "body-parser";
import articles from "./routes/articles.js";
import exercise from "./routes/exercise.js";
import mongoose from "mongoose";

import cors from "cors";
import welcome from "./controllers/welcome.js";

const connectMongo = () => {
  mongoose
    .connect(
      "mongodb+srv://AngeloChristian:angelochristian@cluster0.rha4rdi.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("Database Connected successfully");
    })
    .catch((error) => {
      console.log("Failed to connect to database ", error);
    });
};

const app = express();
app.use(cors());

app.get("/api/v1/", welcome);

app.use("/api/v1/articles", articles);
app.use("/api/v1/names", exercise);

const port = 4000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectMongo();
});
