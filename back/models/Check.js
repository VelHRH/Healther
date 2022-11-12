import mongoose from "mongoose";

const CheckSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    pulse:{
      type: Number,
      required: true
    },
    temperature: {
      type: Number,
      required: true
    },
    weight: Number,
    height: Number
  }
);

export default mongoose.model('Check', CheckSchema);