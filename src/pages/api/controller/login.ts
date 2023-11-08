import User from '../models/user';
import jwt from "jsonwebtoken";
import connect from '../config/db';
import bcrypt from 'bcryptjs';
import { NextApiRequest, NextApiResponse } from 'next';
import { environmentConfig } from "../config/environmentConfig";


export default async function login(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { email, password } = req.body;

        await connect();
       
        const user = await User.findOne({ email });
        if (!user) {
          return res.status(400).json({
            message: `Invalid Email address or Password`,
          });
        }
        if (!user.password) {   
          return res.status(400).json({
            message: `Password not found for this user`,
          });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
    
        if (!isPasswordValid) {
          return res
            .status(401)
            .json({ message: "Invalid Email address or Password" });
        }
    
        const token = jwt.sign(
          {
            userId: user._id,
            userUuid: user.userUuid,
            fullName: user.fullName,
            email: user.email,
          },
          environmentConfig.SECRET_KEY,
          {
            expiresIn: "1h",
          }
        );
        let userData = {
          token: token,
        };

        return res.status(200).json({
          message: "user Login successfully",
          userData,
        });
      } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
      }
}


