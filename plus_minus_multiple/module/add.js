export default function add(users, name){
  let newUser = {
    id: users.length ? users[users.length - 1].id + 1 : 1,
    name: name
  }
  users.push(newUser)
}