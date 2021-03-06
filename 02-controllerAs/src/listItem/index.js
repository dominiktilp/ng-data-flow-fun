import angular from 'angular';
import angularSanitize from 'angular-sanitize';

import ListItemController from './listItemController.js';
import ListItemTemplate from './listItem.html';

class ListItem {
  constructor() {
    this.restrict = 'E';
    this.replace = true;
    this.controller = ListItemController;
    this.controllerAs = "vm";
    this.template = ListItemTemplate;
    this.scope = true;
    this.bindToController = {
      listItem: "=",
      users: "=",
      loadLists: "="
    };
  }

  link(scope, element, attr, ctrl) {
  }

  static directiveFactory() {
    return new ListItem();
  }

}

export default angular
  .module('app.listItem', ['ngSanitize'])
  .directive('listItem', ListItem.directiveFactory)
