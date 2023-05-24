import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import users from "./routes/users.js";
// import dotenv from "./.env";
// import jwt from "jsonwebtoken";

// env = dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
// app.use(routes);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("Connected to database"));
db.on("open", () => {
  console.log("connected......");
});

// const port = process.env.PORT || 5000;
// app.listen(port, () => console.log(`Server running on port ${port}`));
// export default app;

mongoose.connect(
  "mongodb+srv://AngeloChristian:angelochristian@cluster0.rha4rdi.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
let u = [
  {
    email: "tzirw@example.com",
    password: "angelo",
  },
];
app.use("/users", users);
app.use("/login", users);
// jwt.sign(u, process.env.ACCESS_TOKEN_SECRET);

const port = 27017;
app.listen(port, () => {
  console.log(`New Server is running on port ${port}`);
});
