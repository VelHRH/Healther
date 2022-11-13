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
      required: true
    },
    breakfast: {
      type: Array,
      required: true
    },
    lunch: {
      type: Array,
      required: true
    },
    dinner: {
      type: Array,
      required: true
    }
  },
  {
    timestamps: true,
  }
);
PrimeSchema.index({createdAt: 1},{expireAfterSeconds: 2592000});
export default mongoose.model('Prime', PrimeSchema);