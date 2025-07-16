import Artist from "../modals/artist.js";
import cloudinary from "../config/cloudinary.js";
import fs from "fs";

export const addArtist = async (req, res) => {
  try {
    const file = req.files?.image?.[0]; // ✅ Correct access when using upload.fields

    const {
      fullName,
      role,
      phoneNumber,
      email,
      dob,
      district,
      description,
      bestFilm,
      imdbLink,
    } = req.body;

    if (!file || !fullName || !role || !phoneNumber || !email || !dob || !district) {
      return res.status(400).json({ message: "All required fields must be filled including image" });
    }

    const result = await cloudinary.uploader.upload(file.path, {
      folder: "artists",
    });

    fs.unlinkSync(file.path); // ✅ delete from local after upload

    const newArtist = new Artist({
      image: result.secure_url,
      fullName,
      role,
      phoneNumber,
      email,
      dob,
      district,
      description,
      bestFilm,
      imdbLink,
    });

    await newArtist.save();

    res.status(201).json({
      success: true,
      message: "Artist registered successfully",
      data: newArtist,
    });
  } catch (error) {
    console.error("Artist registration failed:", error);
    res.status(500).json({ success: false, message: "Failed to register artist", error: error.message });
  }
};



export const getAllArtists = async (req, res) => {
  try {
    const artists = await Artist.find().sort({ createdAt: -1 }); // latest first
    res.status(200).json({
      success: true,
      count: artists.length,
      data: artists,
    });
  } catch (error) {
    console.error("Error fetching artists:", error);
    res.status(500).json({
      success: false,
      message: "Failed to retrieve artists",
      error: error.message,
    });
  }
};


export const getArtistById = async (req, res) => {
  try {
    const artist = await Artist.findById(req.params.id);
    if (!artist) {
      return res.status(404).json({ success: false, message: "Artist not found" });
    }
    res.status(200).json({ success: true, data: artist });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch artist", error: error.message });
  }
};

export const updateArtistById = async (req, res) => {
  try {
    const updatedArtist = await Artist.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedArtist) {
      return res.status(404).json({ success: false, message: "Artist not found" });
    }
    res.status(200).json({ success: true, message: "Artist updated", data: updatedArtist });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to update artist", error: error.message });
  }
};


export const deleteArtistById = async (req, res) => {
  try {
    const deletedArtist = await Artist.findByIdAndDelete(req.params.id);
    if (!deletedArtist) {
      return res.status(404).json({ success: false, message: "Artist not found" });
    }
    res.status(200).json({ success: true, message: "Artist deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to delete artist", error: error.message });
  }
};
