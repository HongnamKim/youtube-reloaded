import express from "express";

// Controller Import
import { edit, remove } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/edit", edit);
userRouter.get("/remove", remove);

export default userRouter;