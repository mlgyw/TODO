import Repository from "../Repository/index.js";
class Task{
async createTask(task, isComplete) {
    return Repository.Task.createTask(task, isComplete);
  };
  
async wiewTask() {
    return Repository.Task.wiewTask();
  }}

  export default new Task();