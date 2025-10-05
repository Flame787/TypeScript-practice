import React, { useContext } from "react";
import TodoItem from "./TodoItem";
// import Todo from "../models/todo";
import { TodosContext } from "../store/todos-context";
import classes from "./Todos.module.css";

// function Todos(props: { items: string[], children }) {

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  // FC - Function Component (Generic type definition built into React package)
  // React.FC<{items: string[]}> - defining the type of props that this component expects to receive
  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
