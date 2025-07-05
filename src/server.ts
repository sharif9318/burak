// console.log("is it working?");

// // const person: string = "Toshmat";
// // const count: number = 100;

// import moment from "moment";

// const currentTime = moment().format("YYYY:MM:DD: HH:mm:ss");
// console.log(currentTime);

// const person: string = "Martin";
// const count: number = 100;

//architectural pattern:
// (backend) MVC (Model-View-Controller), DI (Dependency Injection),
// (frontend) MVP (model-view-presenter), MVVM (model-view-view-model),

//Design Patterns: middleware, decorators, etc.

import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import app from "./app";

mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("MongoDB connection successful");
    const PORT = process.env.PORT ?? 3003;
    app.listen(PORT, function () {
      console.info(`Server is running on port ${PORT}`);
      console.info(`Admin project is running at http://localhost:${PORT} \n`);
    });
  })
  .catch((err) => console.error("MongoDB connection error:", err));
