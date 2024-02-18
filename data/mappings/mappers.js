module.exports = {
  intToBool,
  boolToInt,
  storeProject,
  storeResource,
  storeTask,
  retrieveProject,
  retrieveResource,
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
    completed: intToBool(project.project_completed),
  };
}

function retrieveProject(project) {
  return {
    ...project,
    completed: boolToInt(project.project_completed),
  };
}

function storeTask(task) {
  return {
    ...task,
    completed: boolToInt(task.task_completed),
  };
}

function retrieveTask(task) {
  return {
    ...task,
    completed: intToBool(task.task_completed),
  };
}
