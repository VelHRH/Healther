import { timeStamp } from "console";
import mongoose from "mongoose";
import { stringify } from "querystring";
import internal from "stream";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    passwordHash: {
      type: String,
      required: true
    },
    passwordHash: {
      type: String,
      required: true
    },
    userSatatus: {
      type: Boolean,
      required: true
    },
    avatarUrl: String,
    },
    {
      timestamps: true,
    }
);

export default mongoose.model('User', userSchema);