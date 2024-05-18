import mongoose, { Mongoose } from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    minLength: [3, "First Name must contain at least 3 characters"],
  },
  lastname: {
    type: String,
    required: true,
    minLength: [3, "Last Name must contain at least 3 characters"],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Please provide a valid Email!"],
  },
  phone: {
    type: String,
    required: true,
    minLength: [10, "Phone number must contain 10 digits"],
    minLength: [10, "Phone number must contain 10 digits"],
  },
  message: {
    type: String,
    required: true,
    minLength: [10, "Message must contain more than 10 characters"],
  },
});

export const Message = mongoose.model("Message", messageSchema);
