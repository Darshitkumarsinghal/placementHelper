import Post from '../model/post.js';
import {request, response} from "express";
import post from "../model/post.js";
export const createPost = async (request,response) => {
   try{
      const post= await new Post(request.body);
      post.save();

      response.status(200).json('blog saved');

   }catch (e) {
       response.status(500).json(e)
   }
}


export const getPost = async (request, response) => {
   try {
      const post = await Post.findById(request.params.id);

      response.status(200).json(post);
   } catch (error) {
      response.status(500).json(error)
   }
}

export const updatePost = async (request,response) => {
   try{
      await Post.findByIdAndUpdate(request.params.id,{
         $set: request.body
      })
      response.status(200).response('blog updated');

   }catch (error) {
      response.status(500).json(error)
   }
}

export const deletePost = async (request, response) => {
   try {
      const post = await Post.findById(request.params.id);

      await post.delete()

      response.status(200).json('post deleted successfully');
   } catch (error) {
      response.status(500).json(error)
   }
}
export const getAllPosts = async (request, response) => {
   let username = request.query.username;
   let category = request.query.category;
   let posts;
   try {
      if(username)
         posts = await Post.find({ username: username });
      else if (category)
         posts = await Post.find({ categories: category });
      else
         posts = await Post.find({});


      response.status(200).json(posts);
   } catch (error) {
      response.status(500).json(error)
   }
}