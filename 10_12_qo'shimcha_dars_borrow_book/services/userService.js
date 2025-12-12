export class UserService {
  constructor() {
    this.users = []
  }
  addUser(user){
    this.users.push(user)
  }
  getAllUsers(){
    return this.users
  }
  findUserById(id){
    return this.users.find(u => u.id === id)
  }
}