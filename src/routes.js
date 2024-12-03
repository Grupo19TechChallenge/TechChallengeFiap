import express from "express";
import { createPostagem } from "./controllers/postagemController.js";

const router = express.Router()

router.post('/cadastro', createPostagem )


export default router

