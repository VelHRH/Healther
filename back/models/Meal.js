import mongoose from "mongoose";

const MealSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true
    },
    type: {
      type: String,
      required: true
    },
    cals: {
      type: Number,
      required: true
    },
    imageUrl: String,
    products: {
      type: Array,
      required: true
    },
    recipe: {
      type: String,
      required: true
    },
    likes: {
      type: Number,
      default: 0
    },
    dislikes: {
      type: Number,
      default: 0
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      default: '636cdc1a4c040b4d4e3e075d'
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Meal', MealSchema);