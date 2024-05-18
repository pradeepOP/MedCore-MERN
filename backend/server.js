import app from "./app.js";
const PORT = process.env.PORT;
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  api_key: process.env.CLOUDINARY_API_KEY,
});
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
