import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    id: Number,
    name: String,
    surname: String,
    email: String,
    phoneNumber: String,
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
