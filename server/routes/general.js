import express from "express";

import { insertUserViaMongo } from "../controllers/general.js";

const router = express.Router();

router.post("/user/insert", insertUserViaMongo);

export default router;
