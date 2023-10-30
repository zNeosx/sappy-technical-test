import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const Report = mongoose.models.Report || mongoose.model("Report", reportSchema);

export default Report;
