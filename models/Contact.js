const mongoose = require("mongoose");
const Joi = require("joi");

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required."],
  },
  address: {
    type: String,
    required: [true, "address is required."],
  },
  city: {
    type: String,
    required: [true, "city is required."],
  },
  email: {
    type: String,
    required: [true, "email is required."],
  },
  phone: {
    type: Number,
    required: [true, "phone number is required."],
  },
  price: [
  
    {
      type: Number,
      required: [true, "price is required."],
    },
  ],
  info: {

    type: String,
    required: [true, "info is required."],
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Contact = new mongoose.model("Contact", ContactSchema);

const validateContact = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(4).max(50).required(),
    address: Joi.string().min(4).max(100).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().regex(/^\d{11}$/).required(),
    city: Joi.string().min(4).max(50).required(),
    price: Joi.number().required(),
    info: Joi.string().min(4).max(200).required(),
  });

  return schema.validate(data);
};

module.exports = {
  validateContact,
  Contact,
};
;