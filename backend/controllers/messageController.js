import { Message } from "../models/messageSchema.js";
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddleWare.js";

export const sendMessage = catchAsyncErrors(async (req, res, next) => {
  const { firstname, lastname, email, phone, message } = req.body;
  if (!firstname || !lastname || !email || !phone || !message) {
    return next(new Error("Please fill out all fields", 400));
  }
  await Message.create({ firstname, lastname, email, phone, message });
  res.status(200).json({ success: true, message: "Message send successfully" });
});

export const getAllMessages = catchAsyncErrors(async (req, res, next) => {
  const messages = await Message.find();
  res.status(200).json({
    success: true,
    messages,
  });
});
