import * as React from 'react';
import { Checkbox } from '../checkbox';
import { TodosContext } from '../../todo-context';
import './todo-list.scss';

export const TodoList = () => {
  const { todos, setTodos } = React.useContext(TodosContext);

  const handleDelete = (id) => {
    // Filter out the deleted todo item from the todos array
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const toggleCheck = (id) => {
    // Update the checked property of the corresponding todo item
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          checked: !todo.checked,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleKeyUp = (e, id) => {
    if (e.keyCode === 13) {
      toggleCheck(id);
    }
  };

  const allChecked = todos.every((todo) => todo.checked);

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      {todos.length ? (
        <div className="todo-list-content">
          {todos.map((todoItem) => (
            <Checkbox
              key={todoItem.id}
              label={todoItem.label}
              checked={todoItem.checked}
              onClick={() => toggleCheck(todoItem.id)}
              onKeyUp={(e) => handleKeyUp(e, todoItem.id)}
              onDelete={() => handleDelete(todoItem.id)}
            />
          ))}
          {allChecked && <div className="no-todos">Looks like you&apos;re absolutely free today!</div>}
        </div>
      ) : (
        <div className="no-todos">Looks like you&apos;re absolutely free today!</div>
      )}
    </div>
  );
};
