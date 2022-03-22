import express, { request } from 'express';
import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';

const router = express.Router();

router.get('/', asyncHandler( async (req, res) => {
    const users = await User.find({});
    res.json(users);
}));

router.get('/:id', asyncHandler( async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
        res.json(user)
    } else {
        res.status(404).json({message: 'User not found'})
    }
}));

router.post('/', asyncHandler( async (req, res) => {
    const newUser = await User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      phone: req.body.phone,
      email: req.body.email,
      bookingdate: req.body.bookingdate,
      bookingtime: req.body.bookingtime,
      suitable: req.body.suitable
    });
    res.json(newUser);
}));

export default router;