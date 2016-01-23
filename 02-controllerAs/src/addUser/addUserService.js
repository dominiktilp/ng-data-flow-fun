class AddUserService {
  constructor($rootScope, $q, userService) {
    this.$rootScope = $rootScope;
    this.$q = $q;
    this.userService = userService;
  }

  openModal() {
    this.defer = this.$q.defer();
    this.$rootScope.$broadcast("openAddUserModal", {defer: this.defer});
    return this.defer.promise.then((data)=>{
      return this.userService.create(data);
    });
  }

}

AddUserService.$inject = ["$rootScope", "$q", "userService"];

export default AddUserService;
