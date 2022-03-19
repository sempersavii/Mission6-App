import mongoose from "mongoose";

const houseSchema = mongoose.Schema({
    name: String,
    location: String,
    suburb: String,
    image: String,
    title: String,
    description: String,
    price: Number,
    bathrooms: Number,
    bedrooms: Number,
    allowPets: String,
    carPark: String,
    nearGrocery: String,
    nearParks: String
}, {
    timestamps: true
});

const House = mongoose.model('House', houseSchema);

export default House;