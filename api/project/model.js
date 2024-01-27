const db = require('../../data/dbConfig');
const mappers = require('../../data/mappings/mappers');

module.exports = {
  get,
  insert,
};

//breadcrumb: explicit async func declaration needed ?
function get(id) {
  let query = db('projects');

  if (id) {
    return query
      .where('project_id', id)
      .first()
      .then((project) => (project ? mappers.retrieveProject(project) : null));
    //if project exists, return the project, else return null
  } else {
    return query.then((projects) => {
      return projects.map((project) => mappers.retrieveProject(project));
    });
  }
}

function insert(project) {
  return db('projects')
    .insert(project)
    .then(([project_id]) => get(project_id));
}
