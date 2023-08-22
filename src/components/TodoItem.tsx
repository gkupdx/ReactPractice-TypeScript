// TodoItem component
import React from "react";
import styles from "./TodoItem.module.css";

const TodoItem: React.FC<{ onRemoveTodo: () => void; text: string }> = (
  props
) => {
  return (
    <li onClick={props.onRemoveTodo} className={styles.item}>
      {props.text}
    </li>
  );
};

export default TodoItem;
