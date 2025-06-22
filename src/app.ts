import express from "express";
import path from "path";

// 1.ENTRANCE

const app = express();
// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 2.Sessions

// 3.Views
app.set("views", path.join(__dirname, "views"));
// Set the view engine to EJS
app.set("view engine", "ejs");

// 4.Routers

export default app; //BU module JS formatda. Agar commonJS formatda bo'lsa, export default app; o'rniga module.exports = app; yozish kerak bo'ladi.
