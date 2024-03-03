import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: false,
    },
    round: {
      type: [
        {
          topic: {
            type: String,
          },
          result: {
            type: Number,
          },
          answer: {
            type: Array,
            default: [],
          },
          date: {
            type: Date,
            default: Date.now,
            required: true,
          },
        },
      ],
      required: true,
      default: [],
    },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
