import express from "express";
import formidable from "express-formidable";
import {
  CreateAUser,
  GetAUser,
  GetUserImage,
} from "../controller/userController.js";

const userRoutes = express.Router();

userRoutes.post("/", formidable(), CreateAUser);
userRoutes.get("/userData", GetAUser);
userRoutes.get("/userImage", GetUserImage);

export default userRoutes;
