const db = require('../data/db-config.js')

module.exports = {
    find
};

function find() {
    return db('schemes')
    .then(schemes => {
      return schemes;
    });
}

// function findById(id) {
//     return db('users as u')
//     .join('posts as p', 'u.id','=','p.user_id')
//     .where('u.id',id)
//     .select('p.id','p.contents','u.username')
//     .then(posts => {
//       return posts;
//     });
// }