import express from "express";
import {
  addService,
  listService,
  removeService,
} from "../controllers/serviceController.js";
import multer from "multer";

const serviceRouter = express.Router();

//Image storage engine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`); //filename with timestamp
  },
});

const upload = multer({ storage: storage }); //middleware - upload

serviceRouter.post("/add", upload.single("image"), addService);
serviceRouter.get("/list", listService);
serviceRouter.post("/remove", removeService);

export default serviceRouter;
