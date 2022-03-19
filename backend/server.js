import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import houseRoutes from './routes/houseRoutes.js';

const app = express();

dotenv.config();
connectDB();
app.use(cors());

app.get('/', (req, res) => {
    res.send('<h1>Hello from backend, API is running...</h1>');
});

app.use('/api/houses', houseRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`));