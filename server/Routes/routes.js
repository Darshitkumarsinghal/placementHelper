import express from "express";
import {createPost, getAllPosts, getPost,updatePost,deletePost} from "../Controller/post-Controller.js";
import {uploadImage,getImage} from "../Controller/image-Controller.js";
import upload from "../utils/upload.js";
import {deleteComment, getComments, newComment} from "../Controller/comment-controller.js";


const router = express.Router();

router.post('/create',createPost);
router.get('/posts',getAllPosts);
router.get('/post/:id',getPost);
router.delete('/delete/:id', deletePost);
router.post('/file/upload',upload.single('file'),uploadImage)

router.post('/update/:id',updatePost);
router.get('/file/:filename', getImage);

router.post('/comment/new', newComment);
router.get('/comments/:id', getComments);
router.delete('/comment/delete/:id', deleteComment);


export default router;