"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.createTask = exports.getTasks = void 0;
const Task_1 = __importDefault(require("../models/Task"));
const getTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tasks = yield Task_1.default.find({ user: req.user.id });
    res.json(tasks);
});
exports.getTasks = getTasks;
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, status, priority, deadline } = req.body;
    const user = req.user.id;
    const task = new Task_1.default({
        title,
        description,
        status,
        priority,
        deadline,
        user,
    });
    const createdTask = yield task.save();
    res.status(201).json(createdTask);
});
exports.createTask = createTask;
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const task = yield Task_1.default.findById(req.params.id);
    if (task) {
        task.title = req.body.title || task.title;
        task.description = req.body.description || task.description;
        task.status = req.body.status || task.status;
        task.priority = req.body.priority || task.priority;
        task.deadline = req.body.deadline || task.deadline;
        const updatedTask = yield task.save();
        res.json(updatedTask);
    }
    else {
        res.status(404).json({ message: "Task not found" });
    }
});
exports.updateTask = updateTask;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const task = yield Task_1.default.findById(req.params.id);
    if (task) {
        yield task.deleteOne({ _id: task._id });
        res.json({ message: "Task removed" });
    }
    else {
        res.status(404).json({ message: "Task not found" });
    }
});
exports.deleteTask = deleteTask;
//# sourceMappingURL=taskController.js.map