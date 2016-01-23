class ListItemController {
  constructor(listService, $sce) {
    this.isEdited = false;
    this.userIsEdited = false;

    this._listService = listService;

    // fix problem with THIS
    // if we can pass and call methods from nested components
    this.edit = this.edit.bind(this);
    this.editUser = this.editUser.bind(this);
    this.updateListItem = this.updateListItem.bind(this);
    this.deleteListItem = this.deleteListItem.bind(this);
    this.selectUser = this.selectUser.bind(this);
  }

  edit() {
    this.isEdited = true;
  }

  editUser() {
    this.userIsEdited = true;
  }

  updateListItem() {
    return this._listService.update(this.listItem).then((data) => {
      // call loadLists from directive params
      this.loadLists();
      this.isEdited = false;
      return data;
    })
  }

  deleteListItem() {
    return this._listService.delete(this.listItem).then((data) => {
      this.loadLists();
      return data;
    })
  }

  selectUser(user) {
    this.listItem.user = user;
    this.listItem.user_id = user._id;
    this.userIsEdited = false;
    this.updateListItem();
  }

}

ListItemController.$inject = ['listService', '$sce'];

export default ListItemController;
