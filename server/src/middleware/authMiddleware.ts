import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import { IGetUserAuthInfoRequest } from "@/utils/getUserInfo";
import User from "../models/User";

interface JwtPayload {
  id: string;
}

export const protect = async (
  req: IGetUserAuthInfoRequest,
  res: Response,
  next: NextFunction
) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;

      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  }

  if (!token) {
    res.status(401).json({ message: "Not authorized, no token" });
  }
};