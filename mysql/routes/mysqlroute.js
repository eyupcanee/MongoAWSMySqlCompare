import express from "express";
import { insertUserViaMySql } from "../controllers/mysql.js";
const router = express.Router();

router.post("/user/insert", insertUserViaMySql);

export default router;
