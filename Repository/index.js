import DBconnector from "./connector.js";
import task from "./task.js";
class Repository {
  DBconnector
  Task
  constructor() {
    this.DBconnector = DBconnector;
    this.Task= task;
  }
}
export default new Repository();