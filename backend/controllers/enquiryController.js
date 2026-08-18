const User = require("../models/User");
const ProjectEnquiry = require("../models/ProjectEnquiry");

const createProjectEnquiry = async (req, res) => {
  try {
    const {
      userId,
      projectType,
      budget,
      timeline,
      description,
    } = req.body;

    if (!userId) {
      return res.status(400).json({
        message: "User ID is required",
      });
    }

    if (!projectType || !budget || !timeline || !description) {
      return res.status(400).json({
        message: "All project enquiry fields are required",
      });
    }

    // Check whether user exists
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // IMPORTANT:
    // User must complete Contact Us first
    if (!user.contactCompleted) {
      return res.status(403).json({
        message:
          "Please complete your contact details before submitting a project enquiry.",
      });
    }

    const enquiry = await ProjectEnquiry.create({
      userId,
      projectType,
      budget,
      timeline,
      description,
    });

    res.status(201).json({
      message: "Project enquiry submitted successfully",
      enquiry,
    });
  } catch (error) {
    console.error("Project enquiry error:", error);

    res.status(500).json({
      message: "Failed to submit project enquiry",
    });
  }
};

module.exports = {
  createProjectEnquiry,
};