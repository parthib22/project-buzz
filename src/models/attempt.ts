import mongoose, { Schema } from "mongoose";

const attemptSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  attempt: {
    type: Array,
    required: false,
    default: [],
  },
});

const Attempt =
  mongoose.models.Attempt || mongoose.model("Attempt", attemptSchema);

export default Attempt;
