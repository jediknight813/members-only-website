import express from 'express';
import mongoose from 'mongoose';

import PostMessage from '../models/posts.js';

const router = express.Router();

export const getPosts = async (req, res) => { 
    try {
        const postMessages = await PostMessage.find();
                
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const AddPost = async (req, res) => {
    const post = req.body;
    console.log(post)
    
    const newPost = new PostMessage(post)

    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409),json({ message: error.message })
    }
}