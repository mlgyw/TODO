import Express from "express";
import task from "./task.js";

const app = Express();

 app.use("/api/task",task);


export default app;