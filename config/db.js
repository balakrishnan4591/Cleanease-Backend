import mongoose from "mongoose";

export const connectDB = async () => {
  //mongodb+srv://balakrishnan4591:UCc0amCNwC0QHZmA@cluster0.azpiy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
  await mongoose
    .connect(
      "mongodb+srv://balakrishnan4591:UCc0amCNwC0QHZmA@cluster0.azpiy.mongodb.net/cleanease"
    )
    .then(() => console.log("DB Connected"));
};
