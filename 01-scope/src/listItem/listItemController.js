class ListItemController {
  constructor($scope, listService, $sce) {
    $scope.isEdited = false;
    $scope.userIsEdited = false;

    $scope.edit = () => {
      $scope.isEdited = true;
    }

    $scope.editUser = () => {
      $scope.userIsEdited = true;
    }

    $scope.updateListItem = () => {
      console.log("update");
      return listService.update($scope.listItem).then((data) => {
        // we hope $parent is the correct parent
        $scope.$parent.loadLists();
        $scope.isEdited = false;
        return data;
      })
    }

    $scope.deleteListItem = () => {
      return listService.delete($scope.listItem).then((data) => {
        $scope.$parent.loadLists();
        return data;
      })
    }

    $scope.selectUser = (user) => {
      $scope.listItem.user = user;
      $scope.listItem.user_id = user._id;
      $scope.userIsEdited = false;
      $scope.updateListItem();
    }    

  }
}

ListItemController.$inject = ['$scope', 'listService', '$sce'];

export default ListItemController;
