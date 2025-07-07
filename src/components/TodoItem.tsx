import React from "react";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

type Props = {
  todo: Todo;
  onToggle: (id: number) => void;
};

const TodoItem: React.FC<Props> = ({ todo, onToggle }) => {
  return (
    <div
      onClick={() => onToggle(todo.id)}
      style={{
        cursor: "pointer",
        marginBottom: "8px",
        textDecoration: todo.completed ? "line-through" : "none",
        color: todo.completed ? "gray" : "black",
      }}
    >
      {todo.title}
    </div>
  );
};

export default TodoItem;
