import React from "react";

import Todo from "../models/todo";

// function Todos(props: { items: string[], children }) {

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  // FC - Function Component (Generic type definition built into React package)
  // React.FC<{items: string[]}> - defining the type of props that this component expects to receive
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default Todos;
