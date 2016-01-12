class AddListItemController {
  constructor($scope) {
    $scope.adding = false;

    $scope.add = () => {
      $scope.list = {};
      $scope.adding = true;
    }

    $scope.save =() =>{
      $scope.$parent.addListItem($scope.list).then((data)=>{
        $scope.item = {};
        $scope.adding = false;
      });
    }
  }

}

AddListItemController.$inject = ["$scope"];


export default AddListItemController;
