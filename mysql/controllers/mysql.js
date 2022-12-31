import mysql from "mysql";
import User from "../models/User.js";

export const insertUserViaMySql = async (req, res) => {
  try {
    await User.create(req.body);

    res.json({ message: "User Inserted!" });
  } catch (error) {
    res.json({ message: error.message });
  }
};
