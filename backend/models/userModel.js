import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        firstname: String,
        lastname: String,
        phone: String,
        email: String,
        bookingdate: String,
        bookingtime: String,
        suitable: String,
        address: String
    }, {
        timestamps: true
    }
);

const User = mongoose.model('User', userSchema);

export default User;