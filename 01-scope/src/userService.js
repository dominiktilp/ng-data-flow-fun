class UserService {
  constructor($http) {
    this.$http = $http;
  }

  create(user) {
    user = {_id: user._id, name: user.name};
    return this.$http.post(`http://localhost:8888/api/users`, {user: user}).then((resp) => {
      return resp.data.user;
    })
  }

  getAll() {
    return this.$http.get("http://localhost:8888/api/users").then((resp) => {
      return resp.data.users;
    })
  }

}

UserService.$inject = ['$http'];


export default UserService;
