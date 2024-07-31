import mongoose, { Document, Schema } from "mongoose";

interface ITask extends Document {
  title: string;
  description?: string;
  status: string;
  priority?: string;
  deadline?: Date;
  user: mongoose.Schema.Types.ObjectId;
}

const taskSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  status: { type: String, required: true },
  priority: { type: String },
  deadline: { type: Date },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

const Task = mongoose.model<ITask>("Task", taskSchema);
export default Task;
