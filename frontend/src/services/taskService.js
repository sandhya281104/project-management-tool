import API from "../api/axios";

// Create Task
export const createTask = async (taskData) => {
  const response = await API.post(
    "/tasks",
    taskData
  );

  return response.data;
};

// Get Tasks
export const getTasks = async () => {
  const response = await API.get(
    "/tasks"
  );

  return response.data;
};

// Update Status
export const updateTaskStatus = async (
  id,
  status
) => {
  const response = await API.put(
    `/tasks/${id}`,
    { status }
  );

  return response.data;
};

// Dashboard Stats
export const getTaskStats = async () => {
  const response = await API.get(
    "/tasks/stats"
  );

  return response.data;
};