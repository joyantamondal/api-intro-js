function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
}
function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users =>displayUsers(users))
}
function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(users =>console.log(users))
}
function displayUsers(data){
    const ul = document.getElementById('users')
   for(const user of data){
       console.log(user.name);
       const li = document.createElement('li');
       li.innerText = `name: ${user.name}  email: ${user.email}`;
       ul.appendChild(li);
   }

}