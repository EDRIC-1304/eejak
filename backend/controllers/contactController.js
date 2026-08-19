const Contact = require("../models/contact");

const updateContactDetails = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      company,
      address,
      subject,
      message,
    } = req.body;

    if (!name || !email || !phone || !company || !address || !subject || !message) {
      return res.status(400).json({
        message: "Name, email, phone, company, address, subject and message are required",
      });
    }

    const contact = await Contact.findOneAndUpdate(
      { userId: req.userId },
      {
        userId: req.userId,
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
        company: company.trim(),
        address: address.trim(),
        subject: subject.trim(),
        message: message.trim(),
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

    if (error.name === "ValidationError") {
      const fieldLabels = {
        name: "Name",
        email: "Email",
        phone: "Phone",
        company: "Company",
        address: "Address",
        subject: "Subject",
        message: "Message",
      };

      return res.status(400).json({
        message: Object.values(error.errors)
          .map((validationError) => {
            const cleanMessage = validationError.message.replace(
              /^Path `[^`]+` /,
              ""
            );
            const fieldLabel = fieldLabels[validationError.path] || validationError.path;

            return `${fieldLabel} ${cleanMessage}`;
          })
          .join("\n"),
      });
    }

    return res.status(500).json({ message: "Failed to save contact details" });
  }
};

module.exports = {
  updateContactDetails,
};