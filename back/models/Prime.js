import mongoose from "mongoose";

const PrimeSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    weight: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      required: true
    },
    activities: {
      type: Array,
      required: true,
      default: ["running"]
    },
    breakfast: {
      type: Array,
      required: true,
      default: ["omelette"]
    },
    lunch: {
      type: Array,
      required: true,
      default: ["borsch"]
    },
    dinner: {
      type: Array,
      required: true,
      default: ["smashed potatoe"]
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Prime', PrimeSchema);