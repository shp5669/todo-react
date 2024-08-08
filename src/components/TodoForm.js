import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
      id: Date.now(),
      text: input,
      completed: false,
    });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md mb-6">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a todo"
        className="flex-grow p-2 border rounded-l"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded-r">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
