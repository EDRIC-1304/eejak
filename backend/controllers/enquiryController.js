const ProjectEnquiry = require("../models/ProjectEnquiry");

const createEnquiry = async (req, res) => {
  try {
    const {
      projectType,
      customRequest,
      description,
      budget,
      timeline,
    } = req.body;

    if (
      !projectType ||
      !description ||
      budget === undefined ||
      !timeline ||
      (projectType === "Custom Requirement" && !customRequest)
    ) {
      return res.status(400).json({
        message:
          projectType === "Custom Requirement" && !customRequest
            ? "Custom requirement is required"
            : "Project type, description, budget and timeline are required",
      });
    }

    const enquiry = await ProjectEnquiry.create({
      userId: req.userId,
      projectType: projectType.trim(),
      customRequest: customRequest ? customRequest.trim() : undefined,
      description: description.trim(),
      budget,
      timeline: timeline.trim(),
    });

    return res.status(201).json({
      message: "Project enquiry submitted successfully",
      enquiry,
    });
  } catch (error) {
    console.error("Project enquiry error:", error);

    return res.status(500).json({
      message: "Failed to submit project enquiry",
    });
  }
};

module.exports = {
  createEnquiry,
};