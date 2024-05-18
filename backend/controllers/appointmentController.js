import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddleWare.js";
import { Appointment } from "../models/appointmentSchmea.js";
import { User } from "../models/userSchema.js";

export const postAppointment = catchAsyncErrors(async (req, res, next) => {
  const {
    firstname,
    lastname,
    phone,
    email,
    nic,
    dob,
    gender,
    appointment_date,
    department,
    doctor_firstname,
    doctor_lastname,
    hasVisited,
    address,
  } = req.body;
  if (
    !firstname ||
    !lastname ||
    !phone ||
    !email ||
    !nic ||
    !dob ||
    !gender ||
    !appointment_date ||
    !department ||
    !doctor_firstname ||
    !doctor_lastname ||
    !address
  ) {
    return next(new ErrorHandler("Please fill out all fields", 400));
  }
  const isConflict = await User.find({
    firstname: doctor_firstname,
    lastname: doctor_lastname,
    role: "Doctor",
    doctorDepartment: department,
  });
  if (isConflict.length === 0) {
    return next(new ErrorHandler("Doctor not found", 404));
  }
  if (isConflict.length > 1) {
    return next(
      new ErrorHandler(
        "Doctors Conflict! Please Contact Through Email Or Phone",
        400
      )
    );
  }

  const doctorId = isConflict[0]._id;
  const patientId = req.user._id;
  const appointment = await Appointment.create({
    firstname,
    lastname,
    phone,
    email,
    nic,
    dob,
    gender,
    appointment_date,
    department,
    doctor: {
      firstname: doctor_firstname,
      lastname: doctor_lastname,
    },
    hasVisited,
    address,
    doctorId,
    patientId,
  });
  res
    .status(200)
    .json({ success: true, message: "Appointment send", appointment });
});

export const getAllAppointments = catchAsyncErrors(async (req, res, next) => {
  const appointments = await Appointment.find();
  res.status(200).json({ success: true, appointments });
});

export const updateAppointmentStatus = catchAsyncErrors(
  async (req, res, next) => {
    const { id } = req.params;
    let appointment = await Appointment.findById(id);
    if (!appointment) {
      return next(new ErrorHandler("Appointment not found", 404));
    }
    appointment = await Appointment.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    res.status(200).json({
      success: true,
      message: "Appointment status updated",
      appointment,
    });
  }
);

export const deleteAppointment = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const appointment = await Appointment.findById(id);
  if (!appointment) {
    return next(new ErrorHandler("Appointment Not Found!", 404));
  }
  await appointment.deleteOne();
  res.status(200).json({
    success: true,
    message: "Appointment Deleted",
  });
});
