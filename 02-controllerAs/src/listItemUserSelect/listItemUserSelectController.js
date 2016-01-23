class ListItemUserSelectController {

  constructor(addUserService) {
    this._addUserService = addUserService;
  }

  createNewUser() {
    this._addUserService.openModal().then(
      (data) => {
        // we can call passed function selectUser directly, becose we are using bindToController
        this.selectUser(data)
      }
    )
  }

}

ListItemUserSelectController.$inject = ['addUserService'];

export default ListItemUserSelectController;
