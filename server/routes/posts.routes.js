import { Router } from "express";
import {
  createPost,
  getPost,
  getPosts,
  removePost,
  updatePost,
} from "../controllers/posts.controllers.js";

const router = Router();

router.get("/posts", getPosts);

router.get("/posts/:id", getPost);

router.post("/posts", createPost);

router.put("/posts/:id", updatePost);

router.delete("/posts/:id", removePost);

export default router;
