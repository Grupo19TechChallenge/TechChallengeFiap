import { Router } from "express";
import postController from "../controllers/postController.js";
import validatePost from "../middlewares/validatePostCreate.js";

const routers = Router();

routers.post('/', validatePost, postController.createPostController);
routers.get('/search', postController.searchPostController);

export default routers;