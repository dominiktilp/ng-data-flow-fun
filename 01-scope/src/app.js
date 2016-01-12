import angular from 'angular';

import './app.scss';
import '!!file?name=index.html!./index.html';

import ListService from './listService.js';
import UserService from './userService.js';
import ContentEditable from './contentEditable.js';

import Lists from './lists/';
import ListItem from './listItem/';
import ListItemHead from './listItemHead/';
import ListItemEdit from './listItemEdit/';
import ListItemUser from './listItemUser/';
import ListItemUserSelect from './listItemUserSelect/';
import AddUser from './addUser/';
import AddListItem from './addListItem/';

if (module.hot) {
  module.hot.accept();
}

export default angular
  .module('app', [
    'app.lists',
    'app.listItem',
    'app.listItemHead',
    'app.listItemEdit',
    'app.listItemUser',
    'app.listItemUserSelect',
    'app.addUser',
    'app.addListItem',
  ])
  .config(config)
  .run(run)
  .service('listService', ListService)
  .service('userService', UserService)
  .directive('contenteditable', ContentEditable)



function config($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
}

config.$inject = ['$httpProvider'];

function run() {

}
