'use strict';
module.exports = function(app) {
var userList = require('../controllers/sensemapController');

  app.route('/users')
    .get(userList.list_all_users)
    .post(userList.create_a_user);

  app.route('/user/:userId')
    .get(userList.read_a_user)
    .put(userList.update_a_user)
    .delete(userList.delete_a_user);
};