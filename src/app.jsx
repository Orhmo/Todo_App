import * as React from 'react';
import { TodoForm } from './components/todo-form';
import { TodoList } from './components/todo-list';
import { TodoResults } from './components/todo-results';
import { TodosContext } from './todo-context';
import './index.scss';

const todosTemplate = [
  {
    id: 0,
    label: 'Fix an ability to display all tasks',
    completed: false,
  },
  {
    id: 1,
    label: 'Fix a layout, checkboxes should be listed in a column',
    completed: false,
  },
  {
    id: 2,
    label: 'Fix an ability to add a new task',
    completed: false,
  },
  {
    id: 3,
    label: 'Fix an ability to toggle a task',
    completed: false,
  },
  {
    id: 4,
    label: 'Fix an ability to delete a task',
    completed: false,
  },
  {
    id: 5,
    label: 'Fix an ability to count completed tasks',
    completed: false,
  },
];

export const App = () => {
  const [todos, setTodos] = React.useState(todosTemplate);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  // const removeTodo = (id) => {
  //   setTodos(todos.filter((todo) => todo.id !== id));
  // };

  // const toggleTodo = (id) => {
  //   setTodos(
  //     todos.map((todo) => {
  //       if (todo.id === id) {
  //         return {
  //           ...todo,
  //           completed: !todo.completed,
  //         };
  //       }
  //       return todo;
  //     }),
  //   );
  // };

  return (
    <div className="root">
      <TodosContext.Provider value={{
        todos
      }}
      >

        <TodoList />
        <TodoResults />
        <TodoForm />
      </TodosContext.Provider>
    </div>
  );
};
