const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 100,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
      match: /^\+?[0-9\s().-]{7,20}$/,
      minlength: 10,
      maxlength: 10,
    },

    company: {
      type: String,
      required: true,
      trim: true,
      maxlength: 150,
    },

    address: {
      type: String,
      required: true,
      trim: true,
      maxlength: 300,
    },

    subject: {
      type: String,
      required: true,
      trim: true,
      maxlength: 200,
    },

    message: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
      maxlength: 5000,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema);