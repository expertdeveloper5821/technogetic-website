import mongoose, { Schema } from "mongoose";

const authSchema: Schema = new Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    userUuid: {type: String, required: false }
},
    { timestamps: true }
)
const Auth = mongoose.model("Auth", authSchema);
export default Auth;
