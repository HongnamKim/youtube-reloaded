import express from "express";

// Controller Import
import { join } from "../controllers/userController";
import { trending } from "../controllers/videoController";

const globalRouter = express.Router();

globalRouter.get("/join", join);
globalRouter.get("/", trending);

export default globalRouter;
