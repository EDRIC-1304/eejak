const mongoose = require("mongoose");

const projectEnquirySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    projectType: {
      type: String,
      required: true,
      trim: true,
    },

    customRequest: {
      type: String,
      trim: true,
      maxlength: 500,
      required: function () {
        return this.projectType === "Custom Requirement";
      },
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    budget: {
      type: Number,
      required: true,
    },

    timeline: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "ProjectEnquiry",
  projectEnquirySchema
);