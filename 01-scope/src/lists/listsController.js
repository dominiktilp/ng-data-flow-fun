class ListsController {
  constructor($scope, listService, userService) {
    $scope.lists = [];
    $scope.users = [];
    loadLists();

    $scope.loadLists = loadLists;
    $scope.addListItem = addListItem;
    $scope.deleteListItem = deleteListItem;

    function loadLists() {
      return listService.getAll().then((data) => {
        $scope.lists = data;
        loadUsers();
        return data;
      })
    }

    function loadUsers() {
      return userService.getAll().then((data) => {
        $scope.users = data;
        $scope.lists = $scope.lists.map(setUserForList, data);
        return data;
      })
    }

    function setUserForList(list) {
      var filtered = $scope.users.filter((us) => {return us._id == list.user_id});
      list.user = filtered.length > 0 ? filtered[0] : undefined;
      return list;
    }

    function addListItem(list) {
      return listService.create(list).then((data) => {
        // $scope.lists.push(data);
        loadLists();
        return data;
      })
    }

    function deleteListItem(list) {
      return listService.delete(list).then((data) => {
        // var index = $scope.lists.map((it)=>{return it._id}).indexOf(list._id);
        // $scope.lists.splice(index, 1);
        loadLists();
        return data;
      })
    }


  }

}

ListsController.$inject = ['$scope', 'listService', 'userService'];


export default ListsController;
