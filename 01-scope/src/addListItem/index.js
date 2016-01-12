import AddListItemController from './addListItemController.es6.js';
import AddListItemTemplate from './addListItem.html';

class AddListItem {
  constructor() {
    this.restrict = 'E';
    this.replace = true;
    this.controller = AddListItemController;
    this.template = AddListItemTemplate;
    this.scope = {};
  }

  link(scope, element, attr, ctr) {
  }

  static directiveFactory() {
    return new AddListItem();
  }

}

export default angular
  .module('app.addListItem', [])
  .directive('addListItem', AddListItem.directiveFactory)
