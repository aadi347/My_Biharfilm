
import mongoose from "mongoose";

const artistSchema = new mongoose.Schema({
  image: { type: String, required: true }, // we are adding url of the image here from Cloudinary
  fullName: { type: String, required: true },
  role: {
    type: String,
    enum: ["Actor", "Actress", "Musician", "Director", "Dancer", "Other"],
    required: true,
  },
  phoneNumber:{type: String, required:true},
  email:{type: String, required:true},
  dob: { type: Date, required: true },
  district: { type: String, required: true },
  description: { type: String, maxlength: 300 },
  bestFilm: { type: String },
  imdbLink: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Artist", artistSchema);
