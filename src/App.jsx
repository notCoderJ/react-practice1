import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Todos from './components/Todos';
import { useEffect, useMemo, useState } from 'react';
import TodoCreator from './components/TodoCreator';
import TodoFilter, { FilterTypes } from './components/TodoFilter';
import { DarkModeProvider } from './contexts/darkmode-context';

library.add(fas, far, fab);
let id = 0;

const TodoAppKeys = Object.freeze({
  filter: 'filter',
  todos: 'todos',
});

function App() {
  const [initialized, setInitialized] = useState(false);
  const [selecteFilter, setFilter] = useState(FilterTypes.all);
  const [todos, setTodos] = useState([]);
  const filteredTodos = useMemo(
    () => filterTodos(todos, selecteFilter),
    [selecteFilter, todos],
  );

  useEffect(() => {
    setFilter(localStorage.getItem(TodoAppKeys.filter) ?? FilterTypes.all);
    setTodos(JSON.parse(localStorage.getItem(TodoAppKeys.todos)) ?? []);
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (!initialized) return;
    localStorage.setItem(TodoAppKeys.filter, selecteFilter);
  }, [initialized, selecteFilter]);

  useEffect(() => {
    if (!initialized) return;
    localStorage.setItem(TodoAppKeys.todos, JSON.stringify(todos));
  }, [initialized, todos]);

  const handleFilterChange = (filterType) => setFilter(filterType);
  const handleAdd = (title) => {
    setTodos((todos) => [...todos, { id, title, done: false }]);
    id += 1;
  };

  const handleChange = (todo, checked) => {
    setTodos((todos) =>
      todos.map((t) => (t.id !== todo.id ? t : { ...t, done: checked })),
    );
  };

  const handleRemove = (todo) => {
    setTodos((todos) => todos.filter((t) => t.id !== todo.id));
  };

  return (
    <section className="todo-app">
      <DarkModeProvider>
        <TodoFilter
          selectedFilter={selecteFilter}
          onFilterChange={handleFilterChange}
        ></TodoFilter>
        <Todos
          items={filteredTodos}
          onChange={handleChange}
          onRemove={handleRemove}
        ></Todos>
        <TodoCreator onAdd={handleAdd}></TodoCreator>
      </DarkModeProvider>
    </section>
  );
}

function filterTodos(todos, filterType) {
  let newTodos = todos;

  switch (filterType) {
    case FilterTypes.all:
      break;
    case FilterTypes.active:
      newTodos = todos.filter((todo) => !todo.done);
      break;
    case FilterTypes.completed:
      newTodos = todos.filter((todo) => todo.done);
      break;
    default:
      return new Error(`Not Supported Filter Type: ${filterType}`);
  }

  return newTodos;
}

export default App;
