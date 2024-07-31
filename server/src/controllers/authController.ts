import { Response } from "express";
import jwt from "jsonwebtoken";

import { IGetUserAuthInfoRequest } from "../utils/getUserInfo";
import User from "../models/User";

const generateToken = (id: string) => {
  return jwt.sign({ id }, process.env.JWT_SECRET!, { expiresIn: "30d" });
};

export const registerUser = async (
  req: IGetUserAuthInfoRequest,
  res: Response
) => {
  console.log(req.body);
  const { email, password, name } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  if (!email || !password || !name) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const user = await User.create({ email, password, name });
  if (user) {
    res.status(201).json({
      _id: user._id,
      email: user.email,
      name: user.name,
      token: generateToken(user._id as string),
    });
  } else {
    res.status(400).json({ message: "Invalid user data" });
  }
};

export const loginUser = async (
  req: IGetUserAuthInfoRequest,
  res: Response
) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      email: user.email,
      name: user.name,
      token: generateToken(user._id as string),
    });
  } else {
    res.status(401).json({ message: "Invalid email or password" });
  }
};
