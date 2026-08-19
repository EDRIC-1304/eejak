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

    const descriptionLength = description.trim().length;

    if (descriptionLength < 15) {
      return res.status(400).json({
        message: "Project description must contain at least 15 characters",
      });
    }

    if (Number(budget) < 1000) {
      return res.status(400).json({
        message: "Estimated budget must be at least 1000",
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

    if (error.name === "ValidationError") {
      return res.status(400).json({
        message: Object.values(error.errors)
          .map((validationError) => validationError.message)
          .join("\n"),
      });
    }

    return res.status(500).json({
      message: "Failed to submit project enquiry",
    });
  }
};

module.exports = {
  createEnquiry,
};