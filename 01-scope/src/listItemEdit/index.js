import angular from 'angular';

import ListItemEditController from './listItemEditController.js';
import ListItemEditTemplate from './listItemEdit.html';

class ListItemEdit {
  constructor() {
    this.restrict = 'E';
    this.replace = true;
    this.controller = ListItemEditController;
    this.template = ListItemEditTemplate;
    this.scope = {};
  }

  link(scope, element, attr, ctr) {

  }

  static directiveFactory() {
    return new ListItemEdit();
  }

}

export default angular
  .module('app.listItemEdit', [])
  .directive('listItemEdit', ListItemEdit.directiveFactory)
