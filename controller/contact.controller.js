const contact = require("../model/contact.model");
const { sendMail } = require("../utils/sendEmail");

module.exports.handleContact = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const saved = await contact.create({ name, email, message });
    await sendMail({ name, email, message });

    res.status(200).json({ message: "Message sent successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};