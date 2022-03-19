import express from 'express';
import House from '../models/houseModel.js';
import asyncHandler from 'express-async-handler';

const router = express.Router();

router.get('/', asyncHandler( async (req, res) => {
    const houses = await House.find({});
    res.json(houses);
}));

router.get('/:id', asyncHandler( async (req, res) => {
    const house = await House.findById(req.params.id);
    if (house) {
        res.json(house)
    } else {
        res.status(404).json({message: 'House not found'})
    }
}));

export default router;