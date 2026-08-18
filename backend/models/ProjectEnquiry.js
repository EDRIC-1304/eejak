const mongoose = require("mongoose");

const projectEnquirySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    projectType: {
      type: String,
      required: true,
      trim: true
    },

    budget: {
      type: String,
      required: true,
      trim: true
    },

    timeline: {
      type: String,
      required: true,
      trim: true
    },

    description: {
      type: String,
      required: true,
      trim: true
    },

    status: {
      type: String,
      enum: ["new", "contacted", "in-progress", "completed"],
      default: "new"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model(
  "ProjectEnquiry",
  projectEnquirySchema
);