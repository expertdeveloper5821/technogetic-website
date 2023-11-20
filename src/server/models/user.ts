import mongoose, { Schema } from "mongoose";

const userSchema: Schema = new Schema({
    userData: [
        {
            fullName: { type: String },
            email: { type: String },
            phoneNumber: { type: Number },
            subject: { type: String },
            message: { type: String },
        }
    ],
    userUuid: { type: String, required: false }
},

    { timestamps: true }
)
const User = mongoose.model("User", userSchema);
export default User;
