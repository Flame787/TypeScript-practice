import React from "react";
import TodoItem from "./TodoItem";
import Todo from "../models/todo";

// function Todos(props: { items: string[], children }) {

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  // FC - Function Component (Generic type definition built into React package)
  // React.FC<{items: string[]}> - defining the type of props that this component expects to receive
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
