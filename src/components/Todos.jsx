import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './todos.module.css';

export default function Todos({ items, onChange, onRemove }) {
  return (
    <ul className={styles.todos}>
      {items.map((item) => (
        <li className={styles.todo} key={item.id}>
          <label
            className={`${styles.label} ${item.done && styles.checked}`}
            htmlFor={item.id}
          >
            <input
              className={styles.checkbox}
              id={item.id}
              type="checkbox"
              checked={item.done}
              onChange={(e) => onChange(item, e.target.checked)}
            />
            {item.title}
          </label>
          <button className={styles.button} onClick={() => onRemove(item)}>
            <FontAwesomeIcon icon="fa-solid fa-trash" />
          </button>
        </li>
      ))}
    </ul>
  );
}
