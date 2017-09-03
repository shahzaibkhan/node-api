'use strict';
module.exports = function(app) {

var userList = require('../controllers/sensemapController');
var key = '3yARG4zzLndmE39Mw00xigqDV3lOrjEJ'; /* 256-bit key requirement. */

  app.route('/users/'+key)
    .get(userList.list_all_users)
    .post(userList.create_a_user);

  app.route('/user/:userId'+'/'+key)
    .get(userList.read_a_user)
    .put(userList.update_a_user)
    .delete(userList.delete_a_user);
};