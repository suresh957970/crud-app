import express from "express";
import { dbConnect } from "./config/database.js";
import contactRouter from "./routes/contact.route.js";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");

// Database
dbConnect();

// Routes
app.use("/", contactRouter);

app.listen(3000, () => {
    console.log("App Started on Port 3000");
});