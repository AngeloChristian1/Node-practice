import express from "express";
import bodyParser from "body-parser";
import {
  createAccount,
  readAccount,
  loginAccount,
} from "../controllers/userAccount.js";

const router = express.Router();
router.use(bodyParser.json());

router.post("/create", createAccount);
router.get("/read", readAccount);
router.post("/login", loginAccount);

export default router;
