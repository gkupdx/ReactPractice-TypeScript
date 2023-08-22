// Todos component
import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todos-context";
import styles from "./Todos.module.css";

const Todos: React.FC = () => {
  const ctx = useContext(TodosContext);

  return (
    <ul className={styles.todos}>
      {ctx.items.map((item) => (
        <TodoItem
          key={item.id}
          onRemoveTodo={ctx.removeTodo.bind(null, item.id)}
          text={item.text}
        />
      ))}
    </ul>
  );
};

export default Todos;
