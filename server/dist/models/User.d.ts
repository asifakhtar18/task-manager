import mongoose, { Document } from "mongoose";
interface IUser extends Document {
    email: string;
    password: string;
    name: string;
    matchPassword(password: string): Promise<boolean>;
}
declare const User: mongoose.Model<IUser, {}, {}, {}, mongoose.Document<unknown, {}, IUser> & IUser & Required<{
    _id: unknown;
}>, any>;
export default User;
