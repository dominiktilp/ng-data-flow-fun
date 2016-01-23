import angular from 'angular';

import ListsController from './listsController.js';
import ListsTemplate from './lists.html';

class Lists {
  constructor() {
    this.restrict = 'E';
    this.replace = true;
    this.controller = ListsController;
    this.controllerAs = "vm";
    this.template = ListsTemplate;
    this.scope = true;
    this.bindToController = { };
  }

  link(scope, element, attr, ctr) {
  }

  static directiveFactory() {
    return new Lists();
  }

}

export default angular
  .module('app.lists', [])
  .directive('lists', Lists.directiveFactory)
