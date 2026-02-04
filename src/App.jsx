import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Todos from './components/Todos';
import { useState } from 'react';

library.add(fas, far, fab);

const initialTodos = Object.freeze([
  { id: 1, title: '운동하기', done: false },
  { id: 2, title: '밥먹기', done: false },
  { id: 3, title: '공부하기', done: false },
]);

function App() {
  const [todos, setTodos] = useState(initialTodos);

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
      <header className="todo-header">
        <button className="theme-btn">
          <FontAwesomeIcon icon="fa-solid fa-moon"></FontAwesomeIcon>
        </button>

        <div>
          <label className="todo-filter__label checked" htmlFor="all">
            All
            <input
              className="todo-filter__input"
              id="all"
              name="todo-filter"
              type="radio"
            />
          </label>
          <label className="todo-filter__label" htmlFor="active">
            Active
            <input
              className="todo-filter__input"
              id="active"
              name="todo-filter"
              type="radio"
            />
          </label>
          <label className="todo-filter__label" htmlFor="completed">
            Completed
            <input
              className="todo-filter__input"
              id="completed"
              name="todo-filter"
              type="radio"
            />
          </label>
        </div>
      </header>

      <Todos
        items={todos}
        onChange={handleChange}
        onRemove={handleRemove}
      ></Todos>

      <footer className="todo-footer">
        <input className="todo-add-input" type="text" placeholder="Add Todo" />
        <button className="todo-add-btn">Add</button>
      </footer>
    </section>
  );
}

export default App;
