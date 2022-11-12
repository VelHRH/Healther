import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
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
    userPrime: {
      type: Boolean,
      required: true
    },
    avatarUrl: String,
    streak: {
      type: Number,
      default: 0
    },
    lastStreakUpdateDate: {
      type: Date,
      default: '2022-10-10'
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('User', UserSchema);