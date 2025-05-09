const mongoose = require("mongoose");
const contactSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, "Please enter name"],
    },
    email: {
      type: String,
      required: [true, "Please enter email"],
    },
    phone: {
      type: Number,
      required: [true, "Please enter phone"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("ContactSchema", contactSchema);
