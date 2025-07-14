// components/Add.jsx
import React from "react";

function Add({ newTodo, setNewTodo, todoCreate, closeDialog }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">Add New Todo</h2>
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Add a new todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                todoCreate();
                closeDialog(); // auto close after enter
              }
            }}
            className="flex-grow p-2 border rounded-l-md focus:outline-none"
          />
          <button
            onClick={() => {
              todoCreate();
              closeDialog(); // auto close after click
            }}
            className="bg-blue-600 border rounded-r-md text-white px-4 py-2 hover:bg-blue-900 duration-300"
          >
            Add
          </button>
        </div>
        <button
          onClick={closeDialog}
          className="text-sm text-gray-600 hover:text-black"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default Add;
