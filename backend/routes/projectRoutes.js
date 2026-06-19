const express = require("express");

const router = express.Router();

const {
  createProject,
  getProjects,
  deleteProject,
  updateProject,
  getProjectCount,
} = require("../controllers/projectController");

router.post("/", createProject);

router.get("/", getProjects);

router.get("/count", getProjectCount);

router.delete("/:id", deleteProject);

router.put("/:id", updateProject);

module.exports = router;