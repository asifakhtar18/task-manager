"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const auth_1 = __importDefault(require("./routes/auth"));
const task_1 = __importDefault(require("./routes/task"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/auth", auth_1.default);
app.use("/api/tasks", task_1.default);
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
mongoose_1.default
    .connect(MONGO_URI, {})
    .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
    .catch((error) => console.log("Error connecting to MongoDB:", error));
//# sourceMappingURL=server.js.map