// Cached Element References
const inpTodo = document.getElementById('todo-input')
const submitBtn = document.getElementById('submit-button')
const todoList = document.getElementById('todo-list')

// Event Listeners
// add event listener to button
submitBtn.addEventListener('click', function(evt) {
  //stop empty values with logic
  if(inpTodo.value === "") return 
  //create new li element that equals text from input
  const newLi = document.createElement('li')
  newLi.textContent = inpTodo.value
  // append new li to the ToDo List (displays with this)
  todoList.appendChild(newLi)
  inpTodo.value = ''
})
// event listener on ToDo list to delete child elements
todoList.addEventListener('click', function(ev) {
  // create element that 
  const parentNode = ev.target.parentNode
  parentNode.removeChild(ev.target)
})