import React from "react";

// function Todos(props: { items: string[], children }) {

const Todos: React.FC<{ items: string[] }> = (props) => {
  // FC - Function Component (Generic type definition built into React package)
  // React.FC<{items: string[]}> - defining the type of props that this component expects to receive
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default Todos;
