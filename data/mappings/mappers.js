module.exports = {
  intToBool,
  boolToInt,
  storeProject,
  storeTask,
  retrieveProject,
  retrieveTask,
};

function intToBool(int) {
  return int === 1 ? true : false;
}

function boolToInt(bool) {
  return bool === true ? 1 : 0;
}

function storeProject(project) {
  return {
    ...project,
    project_completed: boolToInt(project.project_completed),
  };
}

function retrieveProject(project) {
  return {
    ...project,
    project_completed: intToBool(project.project_completed),
  };
}

function storeTask(task) {
  return {
    ...task,
    task_completed: boolToInt(task.task_completed),
  };
}

function retrieveTask(task) {
  return {
    ...task,
    task_completed: intToBool(task.task_completed),
  };
}
