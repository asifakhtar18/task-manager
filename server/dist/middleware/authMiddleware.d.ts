import { Response, NextFunction } from "express";
import { IGetUserAuthInfoRequest } from "@/utils/getUserInfo";
export declare const protect: (req: IGetUserAuthInfoRequest, res: Response, next: NextFunction) => Promise<void>;
