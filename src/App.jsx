import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab);

function App() {
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

      <ul className="todo-list">
        <li className="todo-item">
          <label className="todo-item__label checked" htmlFor="1">
            <input className="todo-item__checkbox" id="1" type="checkbox" />
            운동하기
          </label>
          <button className="todo-item__rm-btn">
            <FontAwesomeIcon icon="fa-solid fa-trash" />
          </button>
        </li>
        <li className="todo-item">
          <label className="todo-item__label" htmlFor="2">
            <input className="todo-item__checkbox" id="2" type="checkbox" />
            밥먹기
          </label>
          <button className="todo-item__rm-btn">
            <FontAwesomeIcon icon="fa-solid fa-trash" />
          </button>
        </li>
        <li className="todo-item">
          <label className="todo-item__label" htmlFor="3">
            <input className="todo-item__checkbox" id="3" type="checkbox" />
            공부하기
          </label>
          <button className="todo-item__rm-btn">
            <FontAwesomeIcon icon="fa-solid fa-trash" />
          </button>
        </li>
      </ul>

      <footer className="todo-footer">
        <input className="todo-add-input" type="text" placeholder="Add Todo" />
        <button className="todo-add-btn">Add</button>
      </footer>
    </section>
  );
}

export default App;
