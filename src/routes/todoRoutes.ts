import express, { Router } from "express";
const router = express.Router();

router.get("/", (_req, res) => {
  return res.status(200).json({
    todos: [
      {
        id: 1,
        task: "Learn Serverless",
      },
      {
        id: 2,
        task: "Read a book",
      },
    ],
  });
});

router.post("/", (req, res) => {
  const { task, completed = false } = req.body;

  const newTodo = {
    id: Date.now(),
    task,
    completed,
  };

  return res.status(201).json({
    message: "Todo Added Successfully",
    newTodo,
  });
});

export const todoRoutes = router;
