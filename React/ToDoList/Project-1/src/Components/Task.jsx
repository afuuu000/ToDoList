import React, { useState } from "react";
// cspell: disable


export default function Task() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [done, setDone] = useState(false)


  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };
  

const handleAdd=()=>{
  setTodos([...todos, {name : todo}])
  setTodo("")
}

const handleChange=(e)=>{
  setTodo(e.target.value)
}
const handleDone = (index) => {
  const updatedTodos = todos.map((item, i) => 
    i === index ? { ...item, done: !item.done } : item
  );
  setTodos(updatedTodos);
};

  return (
    <>
      <div className=" bg-pink-700 my-6 rounded-xl py-5 min-h-[80vh] text-center w-1/2 mx-auto">
        <h1 className="font-bold text-3xl text-white">Todo List</h1>
        <div className="addTodo w-[600px] bg-gray-600  mx-auto min-h-[30vh] my-3">
          <h2 className="text-xl font-bold text-white mt-6 p-6">Add a Todo</h2>
          <input onChange={handleChange} value={todo} type="text" className="w-3/4" />
          <button onClick={handleAdd} disabled={todo.length<=3} className="bg-pink-500 disabled:bg-red-900 hover:bg-pink-800 py-1 p-2 rounded-md text-white mx-5 font-bold text-sm">
            Add
          </button>
          {todos.map((item , index) =>{
          return <div key={index} className="todo bg-slate-300 p-2 max-w-[50] mx-auto  mt-5 flex text-black justify-around items-center ">
            <div className={item.done ? "line-through decoration-red-900" : ""}>{item.name}</div>
            <div className="buttons flex justify-end  items-center ">
              <button onClick={()=>handleDelete(index)} className="bg-pink-500 hover:bg-pink-800 py-1 p-2 rounded-md text-white mx-1 font-bold text-sm">
                Delete
              </button>
              <button onClick={()=>handleDone(index)} className="bg-pink-500 hover:bg-pink-800 py-1 p-2 rounded-md text-white mx-1 font-bold text-sm">
              {item.done ? "Undo" : "Done"}
              </button>

            </div>
          </div>
          })}
        </div>
      </div>
    </>
  );
}