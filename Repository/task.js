import DBconnector from "./connector.js";
class task {
    async createTask(task, isComplete) {
        let complete = isComplete == "true"
        String(false) == "true"

      let result = {
        value: null,
        error: null,
      };
      try {
        const client = await DBconnector.client;
        const newTask = await client.task.create({
          data: {
            task: task,
            isComplete: complete,
          },
        });
        result.value = newTask;
      } catch (error) {
        result.error = error || new Error("repository error");
        // console.log("suka blyat createTask is suck ")
        // console.log(result.error)
      }
      return result;
    }  
    async wiewTask() {
    let result = {
      value: null,
      error: null,
    };
    try {
      const client = await DBconnector.client;
      const newTask = await client.task.findMany();
      result.value = newTask;
    } catch (error) {
      result.error = error || new Error("repository error");
      // console.log("suka blyat createTask is suck ")
      // console.log(result.error)
    }
    return result;
  }  
  async changeStatus(id,isComplete) {
    let complete = isComplete == "true"
    String(false) == "true"

  let result = {
    value: null,
    error: null,
  };
  try {
    const client = await DBconnector.client;
    const newStatus = await client.task.update({
      where: {
        id: id,
      },
      data: {
        isComplete: complete,
      },
    });
    result.value = newStatus;
  } catch (error) {
    console.log(error)
    result.error = error || new Error("repository error");
    // console.log("suka blyat createTask is suck ")
    // console.log(result.error)
  }
  return result;
} 
async deleteTask(id) {

let result = {
  value: null,
  error: null,
};
try {
  const client = await DBconnector.client;
  const newStatus = await client.task.deleteMany({
    where: {
      id: id,
    },
  });
  result.value = newStatus;
} catch (error) {
  console.log(error)
  result.error = error || new Error("repository error");
  // console.log("suka blyat createTask is suck ")
  // console.log(result.error)
}
return result;
} 

}
export default new task();
