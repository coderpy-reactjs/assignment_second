import React, {useState} from 'react';
import './App.css';

function App() {
  const [task, setTask]   = useState('');
  const [todos, setTodos] = useState([])

  const handleADDTodo  = () => {
    if (task.trim() === '') {
      alert("Please the Task !")
    } else {
      setTodos([...todos, {text: task, completed: false}]);
      setTask(' ');
      alert('Task Added Successfully');
    }
  }
  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  }

  return (
      <div className="app">
        <h1>React To-Do List</h1>
        <div className="input-section">
          <input
              type="text"
              value={task}
              placeholder="Enter your task"
              onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={handleADDTodo}>Add</button>
        </div>

        <ul className="todo-list">
          {todos.map((todo, index) => (
              <li key={index} className={todo.completed ? 'completed' : ''}>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleComplete(index)}
                />
                {todo.text}
              </li>
          ))}
        </ul>
      </div>
  );
}

export default App;
