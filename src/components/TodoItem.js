import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleUpdate = () => {
    updateTodo(todo.id, { ...todo, text: newText });
    setIsEditing(false);
  };

  return (
    <li className="flex items-center justify-between p-4 mb-2 bg-white border rounded shadow">
      {isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="flex-grow p-2 mr-2 border rounded"
          />
          <button
            onClick={handleUpdate}
            className="p-2 bg-blue-500 text-white rounded"
          >
            Update
          </button>
        </>
      ) : (
        <>
          <span className="flex-grow">{todo.text}</span>
          <button
            onClick={() => setIsEditing(true)}
            className="p-2 text-blue-500"
          >
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button
            onClick={() => deleteTodo(todo.id)}
            className="p-2 text-red-500"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
