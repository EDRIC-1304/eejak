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
      validate: {
        validator: (value) => value.length >= 15,
        message: "Project description must contain at least 15 characters",
      },
    },

    budget: {
      type: Number,
      required: true,
      min: [1000, "Estimated budget must be at least 1000"],
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