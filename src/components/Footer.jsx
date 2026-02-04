import React, { useRef, useState } from 'react';
import styles from './footer.module.css';

export default function Footer({ onAdd }) {
  const inputRef = useRef();
  const [value, setValue] = useState('');

  const handleChange = (e) => setValue(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = value.trim();
    title && onAdd(title);
    setValue('');
    inputRef.current.focus();
  };

  return (
    <footer>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          className={styles.input}
          type="text"
          placeholder="Add Todo"
          value={value}
          onChange={handleChange}
        />
        <button type="submit" className={styles.button}>
          Add
        </button>
      </form>
    </footer>
  );
}
