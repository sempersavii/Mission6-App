import mongoose from "mongoose";
import dotenv from 'dotenv'
import houses from './data/houses.js';
import House from './models/houseModel.js';
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const importData = async () => {
    try {
        await House.deleteMany();
        const sampleHouses = houses.map(house => {
            return {...house};
        });
        await House.insertMany(sampleHouses);
        console.log('House data imported!');
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        await House.deleteMany();
        console.log('Data destroyed');
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
}
if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}