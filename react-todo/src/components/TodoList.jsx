import React, { useState } from 'react';

const initialTodos = [
  { id: 1, text: 'Learn React', completed: false },
  { id: 2, text: 'Write tests', completed: false },
  { id: 3, text: 'Build projects', completed: true },
];

const TodoList = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    const todo = {
      id: Date.now(),
      text: newTodo.trim(),
      completed: false,
    };

    setTodos([...todos, todo]);
    setNewTodo('');
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Todo List</h1>
      
      <form onSubmit={addTodo} className="mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new todo"
            className="flex-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-testid="todo-input"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-testid="add-todo-button"
          >
            Add
          </button>
        </div>
      </form>
      
      <ul className="space-y-2" data-testid="todo-list">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between p-3 bg-gray-50 rounded hover:bg-gray-100"
            data-testid="todo-item"
          >
            <div 
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => toggleTodo(todo.id)}
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="h-4 w-4 text-blue-500"
                data-testid="todo-checkbox"
              />
              <span 
                className={`${
                  todo.completed ? 'line-through text-gray-500' : ''
                }`}
              >
                {todo.text}
              </span>
            </div>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="px-2 py-1 text-red-500 hover:text-red-700 focus:outline-none"
              data-testid="delete-button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      
      {todos.length === 0 && (
        <p className="text-center text-gray-500 mt-4" data-testid="empty-message">
          No todos yet! Add one above.
        </p>
      )}
    </div>
  );
};

export default TodoList;