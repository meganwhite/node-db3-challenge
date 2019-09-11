const db = require('../data/db-config.js')

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
};

function find() {
    return db('schemes')
    .then(schemes => {
      return schemes;
    });
}

// how to resolve to null if no valid id?
function findById(id) {
    return db('schemes')
    .where('id',id)
    .then(schemes => {
      return schemes;
    });
}

// take out scheme id and order by step number
function findSteps(id) {
    return db('schemes as sc')
    .join('steps as st', 'sc.id', '=', 'st.scheme_id')
    .where('sc.id',id)
    .then(steps => {
      return steps;
    });
}

function add(scheme) {
    return db('schemes')
    .insert(scheme);
}

function update(changes,id) {

}

function remove(id) {

}