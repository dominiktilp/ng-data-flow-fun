import ListItemUserSelectController from './listItemUserSelectController.js';
import ListItemUserSelectTemplate from './listItemUserSelect.html';

class ListItemUserSelect {
  constructor() {
    this.restrict = 'E';
    this.replace = true;
    this.controller = ListItemUserSelectController;
    this.controllerAs = "vm";
    this.template = ListItemUserSelectTemplate;
    this.scope = true;
    this.bindToController = {
      listItem: "=",
      users: "=",
      selectUser: "=",
    };
  }

  link(scope, element, attr, ctr) {

  }

  static directiveFactory() {
    return new ListItemUserSelect();
  }

}

export default angular
  .module('app.listItemUserSelect', ['app.addUser'])
  .directive('listItemUserSelect', ListItemUserSelect.directiveFactory)
