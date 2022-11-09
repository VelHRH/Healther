import mongoose from "mongoose";

const ExerciseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true
    },
    text: {
      type: String,
      required: true
    },
    tags: {
      type: Array,
      default: ['health']
    },
    viewsCount: {
      type: Number,
      default: 0
    },
    repetitions: {
      type: Number,
      required: true
    },
    imageUrl: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Exercise', ExerciseSchema);