const User = require("../models/User");

const updateContactDetails = async (req, res) => {
  try {
    const { userId, phone, company, address } = req.body;

    if (!userId) {
      return res.status(400).json({
        message: "User ID is required",
      });
    }

    if (!phone || !company || !address) {
      return res.status(400).json({
        message: "Phone, company and address are required",
      });
    }

    const user = await User.findByIdAndUpdate(
      userId,
      {
        phone,
        company,
        address,
        contactCompleted: true,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      message: "Contact details updated successfully",
      contactCompleted: user.contactCompleted,
    });
  } catch (error) {
    console.error("Contact update error:", error);

    res.status(500).json({
      message: "Failed to update contact details",
    });
  }
};

module.exports = {
  updateContactDetails,
};