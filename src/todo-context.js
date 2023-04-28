import { createContext } from 'react';

export const TodosContext = createContext({
  todos: [],
  setTodos: () => {},
  handleDelete: () => {},
  toggleChecks: () => {},
});
