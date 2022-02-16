import express from 'express';
import mongoose from 'mongoose';

import User from '../models/user.js';

const router = express.Router();

export const getUsers = async (req, res) => { 
    try {
        const Users = await User.find();
                
        res.status(200).json(Users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}