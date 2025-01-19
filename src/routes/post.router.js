import { Router } from "express";
import postController from "../controllers/postController.js";
import validatePost from "../middlewares/validatePostCreate.js";
import validatePostUpdate from "../middlewares/validatePostUpdate.js";
import validatePostId from "../middlewares/validatePostId.js";

const routers = Router();

routers.post('/', validatePost, postController.createPostController);
routers.get('/search', postController.searchPostController);
routers.get('/:id', validatePostId, postController.searchPostByIdController);
routers.put('/:id', validatePostUpdate, postController.updatePostByIdController);
routers.delete('/:id', validatePostId, postController.deletePostByIdController);

export default routers;