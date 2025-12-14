export default function deleteUser(users, id){
  let index = users.findIndex(user => user.id === +id)
  console.log(index);
  
  if(index !== -1){
    users.splice(index, 1)
  }else{
    console.log("bunday user yo'q");
    
  }
}