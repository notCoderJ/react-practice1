import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Todos({ items, onChange, onRemove }) {
  return (
    <ul className="todo-list">
      {items.map((item) => (
        <li className="todo-item" key={item.id}>
          <label
            className={`todo-item__label ${item.done && 'checked'}`}
            htmlFor={item.id}
          >
            <input
              className="todo-item__checkbox"
              id={item.id}
              type="checkbox"
              checked={item.done}
              onChange={(e) => onChange(item, e.target.checked)}
            />
            {item.title}
          </label>
          <button className="todo-item__rm-btn" onClick={() => onRemove(item)}>
            <FontAwesomeIcon icon="fa-solid fa-trash" />
          </button>
        </li>
      ))}
    </ul>
  );
}
