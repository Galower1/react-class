import { useState } from "react";

export default function Todos() {
  const [todos, setTodos] = useState([]);

  const addTodo = (event) => {
    event.preventDefault();

    const newTodo = event.target.title.value;
    setTodos((prev) => [...prev, newTodo]);
  };

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <form onSubmit={addTodo}>
        <input type="text" placeholder="title" name="title" />
        <button type="submit">Submit Todo</button>
      </form>
    </div>
  );
}
