import fs from 'fs'
import add from "./module/add.js"
import deleteUser from './module/deleteUser.js'
import get from './module/get.js'
import update from './module/update.js'

let users = fs.readFileSync("db/users.json", 'utf-8')
users = JSON.parse(users)
let [,,option, id, name, newName, ] = process.argv;
let func = {
  add: () => add(users, name),
  deleteUser: () => deleteUser(users, id),
  get: () => get(users, id),
  update: () => update(users, id, newName)
}
func[option]()
fs.writeFileSync("db/users.json", JSON.stringify(users, null, 4));

console.log(users);




