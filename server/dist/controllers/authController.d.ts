import { Response } from "express";
import { IGetUserAuthInfoRequest } from "../utils/getUserInfo";
export declare const registerUser: (req: IGetUserAuthInfoRequest, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const loginUser: (req: IGetUserAuthInfoRequest, res: Response) => Promise<void>;
