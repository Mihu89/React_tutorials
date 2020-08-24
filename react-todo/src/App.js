import React from 'react';
import TodoList from './Todo/TodoList';



function App() {
  let [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: 'Learn React in 2 months' },
    { id: 2, completed: true, title: 'Learn Angular in 3 months' },
    { id: 3, completed: false, title: 'Learn Vue in 4 months' }
  ])

  function toggleTodo(id) {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    )
  }

  // let todos = [
  //   {id: 1, completed: false, title: 'Learn React in 2 months'},
  //   {id: 2, completed: false, title: 'Learn Angular in 3 months'},
  //   {id: 3, completed: false, title: 'Learn Vue in 4 months'}
  // ];

  return (
    <div className="wrapper">
      <h1>React tutorial</h1>

      <TodoList todos={todos} onToggle={toggleTodo} />
    </div>
  );
}

export default App;
