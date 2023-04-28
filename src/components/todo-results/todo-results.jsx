import * as React from 'react';
import './todo-results.scss';
import { TodosContext } from '../../todo-context';

export const TodoResults = () => {
  const { todos } = React.useContext(TodosContext);

  const calculateChecked = () => {
    // Fix an ability to calculate completed tasks
    const completedTasks = todos.reduce((acc, todo) => (
      todo.checked ? acc + 1 : acc
    ), 0);
    return completedTasks;
  };

  return (
    <div className="todo-results">
      Done:
      {calculateChecked()}
    </div>
  );
};
