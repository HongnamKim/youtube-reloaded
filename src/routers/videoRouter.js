import express from "express";

// Controller Import
import { watch, edit } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/watch", watch);
videoRouter.get("/edit", edit);

export default videoRouter;
