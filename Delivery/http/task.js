import Express from "express";
import Joi from "joi";
import UseCases from "../../UseCases/index.js";
import validate from "../../validator/validator.js";
import app from "./index.js";

const router = Express.Router();

const task = Joi.object().keys({
  task: Joi.string().required(),
  isComplete: Joi.boolean().required(),
});

router.get("/createTask", validate(task, "query"), async (req, res) => {
  const result = await UseCases.Task.createTask(req.query.task, req.query.isComplete);
  if(result.error){
  res.sendStatus(500);
  }
  else {
    console.log(result.value)
    // res.send(result.value)
    res.json({
      message: result.value
    })
  }
});

router.get("/a", async (req, res) => {
  res.json({
    message: "hellow "
  })
})

router.get("/wiewTask", async (req, res) => {
  const result = await UseCases.Task.wiewTask();
  if(result.error){
  res.sendStatus(500);
  }
  else {
    console.log(result.value)
    // res.send(result.value)
    res.json({
      message: result.value
    })
  }
});

export default router