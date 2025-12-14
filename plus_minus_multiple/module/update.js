export default function put(users, id, newName) {
  let user = users.find(user => user.id === +id)
  user.name = newName
}