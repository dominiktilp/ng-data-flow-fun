class ListItemUserSelectController {

  constructor($scope, addUserService) {

    $scope.createNewUser = () => {
      addUserService.openModal().then(
        (data) => {
          $scope.$parent.selectUser(data)
        }
      )
    }
  }


}

ListItemUserSelectController.$inject = ['$scope', 'addUserService'];

export default ListItemUserSelectController;
