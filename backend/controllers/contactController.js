const Contact = require("../models/Contact");

const updateContactDetails = async (req, res) => {
  try {
    const { phone, company, address } = req.body;

    if (!phone || !company || !address) {
      return res.status(400).json({
        message: "Phone, company and address are required",
      });
    }

    const contact = await Contact.findOneAndUpdate(
      { userId: req.userId },
      {
        userId: req.userId,
        phone: phone.trim(),
        company: company.trim(),
        address: address.trim(),
      },
      {
        new: true,
        upsert: true,
        runValidators: true,
      }
    );

    return res.status(200).json({
      message: "Contact details saved successfully",
      contact,
    });
  } catch (error) {
    console.error("Contact update error:", error);

    return res.status(500).json({
      message: "Failed to save contact details",
    });
  }
};

module.exports = {
  updateContactDetails,
};