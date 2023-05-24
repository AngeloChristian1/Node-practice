import express from "express";
import bodyParser from "body-parser";
import {
  getName,
  postName,
  putName,
  deleteName,
} from "../controllers/exercise.js";

const router = express.Router();
router.use(bodyParser.json());

router.get("/get", getName);
router.post("/post/:name", postName);
router.put("/put", putName);
router.delete("/delete/:id", deleteName);

// router.get("/read/:searchName", readArticle);

export default router;
