import { Response } from "express";
import { IGetUserAuthInfoRequest } from "../utils/getUserInfo";
export declare const getTasks: (req: IGetUserAuthInfoRequest, res: Response) => Promise<void>;
export declare const createTask: (req: IGetUserAuthInfoRequest, res: Response) => Promise<void>;
export declare const updateTask: (req: IGetUserAuthInfoRequest, res: Response) => Promise<void>;
export declare const deleteTask: (req: IGetUserAuthInfoRequest, res: Response) => Promise<void>;
