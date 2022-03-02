import express from "express";

import { getPosts, AddPost} from "../controllers/posts.js";

const router = express.Router();

router.get('/', getPosts);

router.post('/newPost', AddPost);

export default router;