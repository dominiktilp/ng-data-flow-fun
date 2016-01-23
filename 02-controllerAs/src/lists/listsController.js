class ListsController {
  constructor(listService, userService) {
    this.lists = [];
    this.users = [];

    // we need access listService and userService from other methods
    this._listService = listService;
    this._userService = userService;

    // fix problem with THIS
    this.loadLists = this.loadLists.bind(this);
    this.addListItem = this.addListItem.bind(this);
    this.deleteListItem = this.deleteListItem.bind(this);

    // init load data
    this.loadLists();

  }

  loadLists() {
   return this._listService.getAll().then((data) => {
     this.lists = data;
     this.loadUsers();
     return data;
   })
  }

  loadUsers() {
    return this._userService.getAll().then((data) => {
      this.users = data;
      // use arrow function for fixing THIS
      // if you call this.lists.map(this._setUserForList, data), then inside _setUserForList THIS === data
      this.lists = this.lists.map((list) => this._setUserForList(list), data);
      return data;
    })
  }

  _setUserForList(list) {    
    var filtered = this.users.filter((us) => {return us._id == list.user_id});
    list.user = filtered.length > 0 ? filtered[0] : undefined;
    return list;
  }

  addListItem(list) {
    return this._listService.create(list).then((data) => {
      this.loadLists();
      return data;
    })
  }

  deleteListItem(list) {
    return this._listService.delete(list).then((data) => {
      this.loadLists();
      return data;
    })
  }


}

ListsController.$inject = ['listService', 'userService'];


export default ListsController;
