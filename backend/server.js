import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import houseRoutes from './routes/houseRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();

dotenv.config();
connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('<h1>Hello from backend, API is running...</h1>');
});

app.use('/api/houses', houseRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));