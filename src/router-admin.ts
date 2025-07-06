import express from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restaurant.controller";

//Restaurant Admin Routes
// BSSR: EJS
routerAdmin.get("/", restaurantController.goHome);
routerAdmin
  .get("/login", restaurantController.getLogin)
  .post("/login", restaurantController.processLogin);
routerAdmin
  .get("/signup", restaurantController.getSignup)
  .post("/signup", restaurantController.processSignup);

routerAdmin.get("/check-me", restaurantController.checkAuthSesson);

export default routerAdmin;

//Product
//User
