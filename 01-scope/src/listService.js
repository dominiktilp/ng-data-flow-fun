class ListService {
  constructor($http) {
    this.$http = $http;
  }

  create(list) {
    list = {
      _id: list._id,
      name: list.name,
      user_id: list.user_id,
      content: list.content
    };
    return this.$http.post(`http://localhost:8888/api/lists`, {list: list}).then((resp) => {
      return resp.data.list;
    })
  }

  getAll() {
    return this.$http.get("http://localhost:8888/api/lists").then((resp) => {
      return resp.data.lists;
    })
  }

  update(list) {
    list = {
      _id: list._id,
      name: list.name,
      user_id: list.user_id,
      content: list.content
    };
    return this.$http.put(`http://localhost:8888/api/lists/${list._id}`, {list: list}).then((resp) => {
      return resp.data.list;
    })
  }

  delete(list) {
    list = {
      _id: list._id,
      name: list.name,
      user_id: list.user_id,
      content: list.content
    };
    return this.$http.delete(`http://localhost:8888/api/lists/${list._id}`, {list: list}).then((resp) => {
      return resp.data.list;
    })
  }

}

ListService.$inject = ['$http'];


export default ListService;
