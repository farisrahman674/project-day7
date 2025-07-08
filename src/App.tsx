// App.tsx
import { useState } from "react";
import TodoItem from "./components/TodoItem";
import "./App.css";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, title: "Belajar React", completed: false },
    { id: 2, title: "Ngoding Challenge", completed: true },
    { id: 3, title: "Istirahat", completed: false },
  ]);

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <>
      <div style={{}}>
        <h2>Daftar To-do</h2>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} />
        ))}
      </div>
    </>
  );
};

export default App;
