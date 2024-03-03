import mongoose, { Schema } from "mongoose";

const attemptSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  round: [
    {
      topic: {
        type: Array,
        required: true,
      },
      result: {
        type: Array,
        required: true,
      },
    },
  ],
});

const Attempt =
  mongoose.models.Attempt || mongoose.model("Attempt", attemptSchema);

export default Attempt;
