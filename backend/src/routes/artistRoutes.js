import express from "express";
import {addArtist, getAllArtists, getArtistById, updateArtistById, deleteArtistById} from "../controller/artistController.js";
import upload from "../middlewares/multer.js";  

const router = express.Router();

router.post(
  "/addArtist",
  (req, res, next) => {
    console.log("Image Upload starting... ! Image reached to backend, route is hitting");
    next();
  },
  upload.fields([
    { name: "image", maxCount: 1 },
  ]),
  addArtist
); 

router.get("/getAllArtists", getAllArtists);
router.get("/getArtistById/:id", getArtistById);
router.put("/updateArtistById/:id", updateArtistById);
router.delete("/deleteArtistById/:id", deleteArtistById);

export default router;