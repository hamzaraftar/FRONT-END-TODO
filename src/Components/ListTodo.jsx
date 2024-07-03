import { useEffect, useState } from "react";

const ListTodo = () => {
  const [todos, setTodos] = useState([]);

  // delete todo function

  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });
      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (err) {
      console.error(err.massage);
    }
  };

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos");
      const result = await response.json();

      setTodos(result);
    } catch (err) {
      console.error(err.massage);
    }
  };

  useEffect(() => {
    getTodos();
  }, [todos]);

  return (
    <div>
      <table className="w-[400px] mx-auto mt-10">
        <thead>
          <tr>
            <th>Description</th>

            <th>Delete</th>
          </tr>
        </thead>
        <tbody className="w-[200px] mx-auto mt-10">
          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>

              <td>
                <button
                  onClick={() => deleteTodo(todo.todo_id)}
                  className=" px-4 py-2 bg-red-600 text-white font-semibold hover:bg-red-700 rounded-lg my-1"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListTodo;
