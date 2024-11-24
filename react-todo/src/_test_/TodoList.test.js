import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  // Test initial render
  test('renders TodoList with initial todos', () => {
    render(<TodoList />);
    
    // Check if the title is rendered
    expect(screen.getByText('Todo List')).toBeInTheDocument();
    
    // Check if initial todos are rendered
    const todoItems = screen.getAllByTestId('todo-item');
    expect(todoItems).toHaveLength(3);
    
    // Verify specific todo content
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Write tests')).toBeInTheDocument();
    expect(screen.getByText('Build projects')).toBeInTheDocument();
  });

  // Test adding a new todo
  test('can add a new todo', () => {
    render(<TodoList />);
    
    // Get the input and add button
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-todo-button');
    
    // Add a new todo
    fireEvent.change(input, { target: { value: 'New Todo Item' } });
    fireEvent.click(addButton);
    
    // Verify the new todo is added
    expect(screen.getByText('New Todo Item')).toBeInTheDocument();
    
    // Verify input is cleared after adding
    expect(input.value).toBe('');
    
    // Verify todo count increased
    const todoItems = screen.getAllByTestId('todo-item');
    expect(todoItems).toHaveLength(4);
  });

  // Test empty todo input
  test('cannot add empty todo', () => {
    render(<TodoList />);
    
    const initialTodoCount = screen.getAllByTestId('todo-item').length;
    
    // Try to add empty todo
    const addButton = screen.getByTestId('add-todo-button');
    fireEvent.click(addButton);
    
    // Verify no new todo was added
    expect(screen.getAllByTestId('todo-item')).toHaveLength(initialTodoCount);
  });

  // Test toggling todo completion
  test('can toggle todo completion status', () => {
    render(<TodoList />);
    
    // Get the first todo's checkbox
    const firstTodoCheckbox = screen.getAllByTestId('todo-checkbox')[0];
    
    // Get initial checked state
    const initialCheckedState = firstTodoCheckbox.checked;
    
    // Toggle todo
    fireEvent.click(firstTodoCheckbox);
    
    // Verify checkbox state changed
    expect(firstTodoCheckbox.checked).toBe(!initialCheckedState);
  });

  // Test deleting a todo
  test('can delete a todo', () => {
    render(<TodoList />);
    
    // Get initial todo count
    const initialTodoCount = screen.getAllByTestId('todo-item').length;
    
    // Delete the first todo
    const deleteButtons = screen.getAllByTestId('delete-button');
    fireEvent.click(deleteButtons[0]);
    
    // Verify todo was deleted
    const newTodoCount = screen.getAllByTestId('todo-item').length;
    expect(newTodoCount).toBe(initialTodoCount - 1);
  });

  // Test empty state
  test('shows empty message when all todos are deleted', () => {
    render(<TodoList />);
    
    // Delete all todos
    const deleteButtons = screen.getAllByTestId('delete-button');
    deleteButtons.forEach(button => {
      fireEvent.click(button);
    });
    
    // Verify empty message is shown
    expect(screen.getByTestId('empty-message')).toBeInTheDocument();
    expect(screen.getByText('No todos yet! Add one above.')).toBeInTheDocument();
  });

  // Test form submission
  test('can submit todo with enter key', () => {
    render(<TodoList />);
    
    // Get the input
    const input = screen.getByTestId('todo-input');
    
    // Add todo using form submission
    fireEvent.change(input, { target: { value: 'Submit with Enter' } });
    fireEvent.submit(input.closest('form'));
    
    // Verify todo was added
    expect(screen.getByText('Submit with Enter')).toBeInTheDocument();
  });
});