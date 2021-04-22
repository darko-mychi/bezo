import { Schema } from "mongoose";
import { IUser } from "./@types/user";

const UserSchema = new Schema<IUser>({
    phone: {
        type: String,
        unique: true,
        required: [true, "Phone number is required!"],
        minlength: [10, "Enter a valid phone number!"]
    },
    password: {
        type: String,
        required: [true, "Password is required!"],
        minlength: [8, "Password should have at least 8 characters"],
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
});

export default UserSchema;
