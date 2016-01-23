class AddListItemController {
  constructor() {
    this.adding = false;
  }

  add() {
    this.list = {};
    this.adding = true;
  }

  save() {
    this.addListItem(this.list).then((data)=>{
      this.item = {};
      this.adding = false;
    });
  }

}

AddListItemController.$inject = [];


export default AddListItemController;
