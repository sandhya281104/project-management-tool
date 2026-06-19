const express = require("express");

const router = express.Router();

const {
  createTask,
  getTasks,
  updateTaskStatus,
  getTaskStats,
} = require("../controllers/taskController");

router.post("/", createTask);

router.get("/", getTasks);

router.get("/stats", getTaskStats);

router.put("/:id", updateTaskStatus);

module.exports = router;