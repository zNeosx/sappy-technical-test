import mongoose from "mongoose";

const beneficiarieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    unique: true,
    required: true,
  },
  image: {
    type: String,
    unique: true,
    required: true,
  },
  reports: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Report",
    },
  ],
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const Beneficiarie =
  mongoose.models.Beneficiarie ||
  mongoose.model("Beneficiarie", beneficiarieSchema);

export default Beneficiarie;
