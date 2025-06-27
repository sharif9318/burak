import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./routerAdmin";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";
// 1.ENTRANCE

// Middleware

const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan(MORGAN_FORMAT)); // Logging middleware

// 2.Sessions

// 3.Views
app.set("views", path.join(__dirname, "views"));
// Set the view engine to EJS
app.set("view engine", "ejs");

// 4.Routers
app.use("/admin", routerAdmin); //BSSR:EJS
app.use("/", router); //SPA: REACT
export default app;
