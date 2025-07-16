// config/cloudinary.js
import { v2 as cloudinary } from 'cloudinary';
import dotenv from "dotenv";
dotenv.config();


console.log("🔐 Cloudinary ENV:", {
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET ? "The cloudinary enviroment variables are Loaded" : "or it is Missing",
});

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY,        
  api_secret: process.env.CLOUDINARY_API_SECRET, 
});

export default cloudinary;
