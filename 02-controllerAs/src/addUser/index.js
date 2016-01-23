import AddUserController from './addUserController.js';
import AddUserTemplate from './addUser.html';
import AddUserService from './addUserService.js';

class AddUser {
  constructor() {
    this.restrict = 'E';
    this.replace = true;
    this.controller = AddUserController;
    this.template = AddUserTemplate;
    this.scope = {};
  }

  link(scope, element, attr, ctrl) {
    scope.$on('openAddUserModal', (event, data) => {
      scope.openModal(data.defer);
    });
  }

  static directiveFactory() {
    return new AddUser();
  }

}

export default angular
  .module('app.addUser', [])
  .service('addUserService', AddUserService)
  .directive('addUser', AddUser.directiveFactory)
