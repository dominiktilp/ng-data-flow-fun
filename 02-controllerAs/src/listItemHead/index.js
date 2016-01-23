import angular from 'angular';

import ListItemHeadController from './listItemHeadController.js';
import ListItemHeadTemplate from './listItemHead.html';

class ListItemHead {
  constructor() {
    this.restrict = 'E';
    this.replace = true;
    this.controller = ListItemHeadController;
    this.controllerAs = "vm";
    this.template = ListItemHeadTemplate;
    this.scope = true;
    this.bindToController = {
      listItem: "=",
      edit: "=",
      delete: "="
    };
  }

  link(scope, element, attr, ctr) {

  }

  static directiveFactory() {
    return new ListItemHead();
  }

}

export default angular
  .module('app.listItemHead', [])
  .directive('listItemHead', ListItemHead.directiveFactory)
