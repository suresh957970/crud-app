import mongoose from "mongoose";

export const dbConnect = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/contact-crud")
        .then(() => {
            console.log("MongoDB connected successfully ✅");
        })
        .catch((error) => {
            console.error("MongoDB connection failed:", error);
        });
};