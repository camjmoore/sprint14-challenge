const db = require('../../data/dbConfig');
const mappers = require('../../data/mappings/mappers');

module.exports = {
  get,
  insert,
};

function get(id) {
  let query = db('tasks as t')
    .join('projects as p', 'p.project_id', 't.project_id')
    .select(
      't.task_id',
      't.task_description',
      't.task_notes',
      't.task_completed',
      'p.project_name',
      'p.project_description'
    );

  if (id) {
    return query
      .where('t.task_id', id)
      .first()
      .then((task) => (task ? mappers.retrieveTask(task) : null));
  } else {
    return query.then((tasks) => tasks.map((task) => mappers.retrieveTask(task)));
  }
}

function insert(task) {
  return db('tasks')
    .insert(task)
    .then(([task_id]) => get(task_id));
}