import express from "express";
import { deleteUser, followUser, getUser, UnFollowUser, updateUser } from "../Controllers/UserController.js";
import { getAllUsers } from "../Controllers/UserController.js";
import authMiddleWare from "../middleware/AuthMiddleware.js";

const router = express.Router();

router.get('/',getAllUsers)
router.get('/:id', getUser)
//Only update if auth middleware is fine
router.put('/:id', authMiddleWare, updateUser)
router.delete('/:id', authMiddleWare, deleteUser)
router.put('/:id/follow', authMiddleWare,followUser)
router.put('/:id/unfollow',authMiddleWare, UnFollowUser)
export default router;