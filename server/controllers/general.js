import mongoose from "mongoose";
import User from "../models/User.js";

export const insertUserViaMongo = async (req, res) => {
  const { id, name, surname, email, phoneNumber } = req.body;

  const newUser = new User({
    id,
    name,
    surname,
    email,
    phoneNumber,
  });

  try {
    await newUser.save();

    res.status(200).json(newUser);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
