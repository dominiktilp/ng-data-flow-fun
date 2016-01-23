import angular from 'angular';

import ListItemUserController from './listItemUserController.js';
import ListItemUserTemplate from './listItemUser.html';

class ListItemUser {
  constructor() {
    this.restrict = 'E';
    this.replace = true;
    this.controller = ListItemUserController;
    this.controllerAs = "vm";
    this.template = ListItemUserTemplate;
    this.scope = true;
    this.bindToController = {
      listItem: "=",
      editUser: "="
    };
  }

  link(scope, element, attr, ctr) {

  }

  static directiveFactory() {
    return new ListItemUser();
  }

}

export default angular
  .module('app.listItemUser', [])
  .directive('listItemUser', ListItemUser.directiveFactory)
