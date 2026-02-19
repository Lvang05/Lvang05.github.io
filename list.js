const todoList = document.querySelector('.todo-list')
const input = document.querySelector('#new-todo')
const button = document.querySelector('button')

const todos = JSON.parse(localStorage.getItem('todo-list')) || []

const renderTodos = () => {
    todoList.innerHTML = ''
    todos.forEach(todo => {
        const li = document.createElement('li')
        li.textContent = todo.text
        todoList.append(li)
    })
}

button.addEventListener('click', () => {
    const text = input.value.trim()
    if (text === '') return
    todos.push({ text: input.value, completed: false })
    localStorage.setItem('todo-list', JSON.stringify(todos))
    input.value = ''
    renderTodos()
})

renderTodos()
