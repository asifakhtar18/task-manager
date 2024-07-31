import mongoose, { Document } from "mongoose";
interface ITask extends Document {
    title: string;
    description?: string;
    status: string;
    priority?: string;
    deadline?: Date;
    user: mongoose.Schema.Types.ObjectId;
}
declare const Task: mongoose.Model<ITask, {}, {}, {}, mongoose.Document<unknown, {}, ITask> & ITask & Required<{
    _id: unknown;
}>, any>;
export default Task;
