import express from "express";
import bodyParser from "body-parser";
import {
  createArticle,
  readArticle,
  createArticleController,
  commentArticle,
  readArticlesLimited,
  updateArticle,
  deleteArticle,
} from "../controllers/articles.js";

const router = express.Router();
router.use(bodyParser.json());

router.post("/create", createArticle);
router.get("/read/:searchName", readArticle);
router.post("/controller", createArticleController);
router.post("/comment/:id", commentArticle);
// router.get("/blog", blogArticle);
// router.get("/exercise", exerciseArticle)

router.get("/readlimit", readArticlesLimited);
router.patch("/update/:id", updateArticle);
router.delete("/delete/:id", deleteArticle);
export default router;
