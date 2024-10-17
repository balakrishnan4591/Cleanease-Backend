import serviceModel from "../models/serviceModel.js";
import fs from "fs";

//add service
const addService = async (req, res) => {
  let image_filename = `${req.file.filename}`;
  const service = new serviceModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });
  try {
    await service.save();
    res.json({ success: true, message: "Service Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// list all services
const listService = async (req, res) => {
  try {
    const services = await serviceModel.find({});
    res.json({ success: true, data: services });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// remove a service
const removeService = async (req, res) => {
  try {
    const service = await serviceModel.findById(req.body.id); //find the service model using the id
    fs.unlink(`uploads/${service.image}`, () => {}); //delete image from repo

    await serviceModel.findByIdAndDelete(req.body.id); //remove the service
    res.json({ success: true, message: "Service Removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { addService, listService, removeService };
