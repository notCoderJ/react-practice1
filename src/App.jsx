import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Todos from './components/Todos';
import { useMemo, useState } from 'react';
import TodoCreator from './components/TodoCreator';
import TodoFilter, { FilterTypes } from './components/TodoFilter';

library.add(fas, far, fab);
let id = 0;

function App() {
  const [todos, setTodos] = useState([]);
  const [selecteFilter, setFilter] = useState(FilterTypes.all);
  const filteredTodos = useMemo(
    () => filterTodos(todos, selecteFilter),
    [selecteFilter, todos],
  );

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
