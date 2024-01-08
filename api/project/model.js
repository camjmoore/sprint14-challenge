const db = require('../../data/dbConfig');

module.exports = {
  get,
  insert,
};

function get() {
  //needs to be a boolean
  return db('projects');
}

function insert(project) {
  //needs to be a integer
  return db('project').insert(project, 'project_id');
}
