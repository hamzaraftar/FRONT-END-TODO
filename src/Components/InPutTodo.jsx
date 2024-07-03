import { useState } from "react";

const InPutTodo = () => {
  const [description, setDescription] = useState("");
  const handleClick = async (e) => {
    e.preventDefault();    
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      Window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
    setDescription(""); 
  };


  return (
    <div>
      <h1 className="font-bold text-3xl text-gray-700 text-center mt-4">
        Full Stack Todo
      </h1>
      <form className="w-[600px] mx-auto mt-8 flex" onSubmit={ handleClick } > 
        <input
          type="text"
          className="border-2 border-gray-300 rounded-md p-2 w-full outline-none"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          placeholder="Enter Todo"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md p-2 text-nowrap	mx-2 "
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default InPutTodo;
