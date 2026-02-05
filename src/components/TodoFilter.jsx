import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './TodoFilter.module.css';

export const FilterTypes = Object.freeze({
  all: 'all',
  active: 'active',
  completed: 'completed',
});

export default function TodoFilter({ selectedFilter, onFilterChange }) {
  return (
    <header className={styles['todo-filter']}>
      <button className={styles.button}>
        <FontAwesomeIcon icon="fa-solid fa-moon"></FontAwesomeIcon>
      </button>

      {Object.keys(FilterTypes).map((filter) => (
        <label
          key={filter}
          className={`${styles.label} ${selectedFilter === filter && styles.selected}`}
          htmlFor={filter}
        >
          {filter}
          <input
            className={styles.input}
            id={filter}
            name="todo-filter"
            type="radio"
            value={filter}
            checked={selectedFilter === filter}
            onChange={(e) => onFilterChange(e.target.value)}
          />
        </label>
      ))}
    </header>
  );
}
