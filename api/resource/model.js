const db = require('../../data/dbConfig');

module.exports = {
    get,
    insert,
};

function get(id) {
    let query = db('resources');

    return id ? query.where('resource_id', id).first() : query;
}

function insert(resource) {
    return db('resources')
        .insert(resource)
        .then(([resource_id]) => get(resource_id));
}