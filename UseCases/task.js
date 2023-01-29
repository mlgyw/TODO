import Repository from "../Repository/index.js";
class Task{
async createTask(task, isComplete) {
    return Repository.Task.createTask(task, isComplete);
  };
  
async wiewTask() {
    return Repository.Task.wiewTask();
  }

  async changeStatus(id,isComplete) {
    return Repository.Task.changeStatus(id,isComplete);
  }
  async deleteTask(id) {
    return Repository.Task.deleteTask(id);
  }
}

  export default new Task();