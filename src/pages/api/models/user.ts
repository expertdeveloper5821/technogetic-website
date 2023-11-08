import mongoose, { Schema } from "mongoose";

const userSchema: Schema = new Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    userUuid: {type: String, required: false }
},
    { timestamps: true }
)
const User = mongoose.model("User", userSchema);
export default User;
