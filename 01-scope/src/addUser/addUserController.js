class AddUserController {
  constructor($scope, userService) {


    $scope.show = false;

    $scope.openModal = (defer) => {
      this.defer = defer;
      $scope.user = {};
      $scope.show = true;
      return this.defer.promise;
    }

    $scope.save = () => {
      $scope.show = false;
      this.defer.resolve($scope.user);
    }

    $scope.cancel = () => {
      $scope.show = false;
      this.defer.reject();
    }

  }



}

AddUserController.$inject = ["$scope", "userService"];


export default AddUserController;
