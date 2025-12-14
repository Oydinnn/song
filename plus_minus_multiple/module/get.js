import { table } from "console"

export default function get(users, id) {
  let user = users.find(user => user.id === +id)
  if(user) {
    console.log(user);
  }else{
    console.log('bunday user yuq')
  }
}