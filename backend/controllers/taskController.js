const Task = require("../models/Task");

// Create Task
const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;

    const task = await Task.create({
      title,
      description,
    });

    res.status(201).json({
      message: "Task Created Successfully",
      task,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Tasks
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();

    res.status(200).json(tasks);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateTaskStatus = async (req, res) => {
  try {

    const task =
      await Task.findByIdAndUpdate(
        req.params.id,
        {
          status: req.body.status,
        },
        {
          new: true,
        }
      );

    res.status(200).json({
      message: "Status Updated",
      task,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

const getTaskStats = async (req, res) => {
  try {
    const totalTasks =
      await Task.countDocuments();

    const completedTasks =
      await Task.countDocuments({
        status: "Completed",
      });

    const pendingTasks =
      await Task.countDocuments({
        status: "Todo",
      });

    res.status(200).json({
      totalTasks,
      completedTasks,
      pendingTasks,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createTask,
  getTasks,
  updateTaskStatus,
   getTaskStats,
};