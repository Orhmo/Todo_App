import { createContext } from 'react';

export const TodosContext = createContext({
  todos: [],
  addTodo: (newTodo) => {},
  handleDelete: (todoId) => {},
  toggleCheck: (todoId) => {},
});
