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

function findSteps(id) {
    return db('schemes as sc')
    .join('steps as st', 'sc.id', '=', 'st.scheme_id')
    .select(
        "st.id",
        "sc.scheme_name",
        "st.step_number",
        "st.instructions"
    )
    .where('sc.id',id)
    .orderBy("st.step_number","asc")
}

function add(scheme) {
    return db('schemes')
    .insert(scheme)
    .then(([id]) => {
        return findById(id)
    })

}

function update(changes,id) {
    return db('schemes')
    .update(changes)
    .where('id',id)
    .then(() => {
        return findById(id)
    })

}

function remove(id) {
    let scheme = null;
    findById(id).then(selectedScheme => {
        scheme = selectedScheme;
    })
    return db('schemes')
    .where('id',id)
    .del()
    .then((selectedScheme) => {
        if(selectedScheme) {
            return scheme;
        }
        else {
            return null
        }
    })

}