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
      style={{
        padding: "10px 20px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        minWidth: "250px",
        textAlign: "center",
        marginBottom: "8px",
        backgroundColor: todo.completed ? "#f0f0f0" : "#fff",
      }}
    >
      <p
        style={{
          margin: 0,
          textDecoration: todo.completed ? "line-through" : "none",
          color: todo.completed ? "gray" : "black",
        }}
      >
        {todo.title}
      </p>

      <button
        onClick={() => onToggle(todo.id)}
        style={{
          marginTop: "6px",
          padding: "4px 12px",
          fontSize: "0.9rem",
          cursor: "pointer",
          backgroundColor: todo.completed ? "#ffcdd2" : "#c8e6c9",
          border: "none",
          borderRadius: "5px",
        }}
      >
        {todo.completed ? "Batal" : "Selesai"}
      </button>
    </div>
  );
};

export default TodoItem;
