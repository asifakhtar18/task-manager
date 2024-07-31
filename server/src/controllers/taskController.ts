import { Response } from "express";

import { IGetUserAuthInfoRequest } from "../utils/getUserInfo";
import Task from "../models/Task";

export const getTasks = async (req: IGetUserAuthInfoRequest, res: Response) => {
  const tasks = await Task.find({ user: req.user.id });
  res.json(tasks);
};

export const createTask = async (
  req: IGetUserAuthInfoRequest,
  res: Response
) => {
  const { title, description, status, priority, deadline } = req.body;

  const user = req.user.id;

  const task = new Task({
    title,
    description,
    status,
    priority,
    deadline,
    user,
  });

  const createdTask = await task.save();
  res.status(201).json(createdTask);
};

export const updateTask = async (
  req: IGetUserAuthInfoRequest,
  res: Response
) => {
  const task = await Task.findById(req.params.id);

  if (task) {
    task.title = req.body.title || task.title;
    task.description = req.body.description || task.description;
    task.status = req.body.status || task.status;
    task.priority = req.body.priority || task.priority;
    task.deadline = req.body.deadline || task.deadline;

    const updatedTask = await task.save();
    res.json(updatedTask);
  } else {
    res.status(404).json({ message: "Task not found" });
  }
};

export const deleteTask = async (
  req: IGetUserAuthInfoRequest,
  res: Response
) => {
  const task = await Task.findById(req.params.id);

  if (task) {
    await task.deleteOne({ _id: task._id });
    res.json({ message: "Task removed" });
  } else {
    res.status(404).json({ message: "Task not found" });
  }
};
