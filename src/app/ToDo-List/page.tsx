'use client'
import React, { FormEvent, useState } from 'react'
import ToDo_Header from './Components/ToDo_Header'
import { LuPlus, LuMinus } from "react-icons/lu";
import { FaTrashCan } from "react-icons/fa6";
import classNames from 'classnames'

const ToDo_List = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  interface Todo {
    id: string;
    title: string;
    completed: boolean;
  }

  interface toggleTodoProps{
    id: string;
    complete: boolean;
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTodos((currentTodos: Todo[]) => [ // Explicitly type currentTodos
    ...currentTodos,
    {
      id: crypto.randomUUID(),
      title: newItem,
      completed: false,
    },
    ]);
    
    setNewItem("");
  };

  const toggleTodo = (id: string, completed: boolean) => {
    setTodos((currentTodos: Todo[]) =>
      currentTodos.map((todo: Todo) => {
        completed = !todo.completed;
        if (todo.id === id) {
          // Spread the existing todo and override the 'completed' property
          return { ...todo, completed };
        }
        return todo;
      })
    )
    }
  
    const deleteTodo = (id: string) => {
      setTodos((currentTodos: Todo[]) => { return currentTodos.filter((todo: Todo) => todo.id !== id); })
}
  
  return (
    <main>
      <ToDo_Header Name="To Do List"></ToDo_Header>
      <div className='flex flex-col justify-center items-center w-full'>
        <button onClick={() => setIsOpen((prev) => !prev)} className="justify-between flex items-center w-11/12 pt-2 text-2xl">
            Add new to do
          {!isOpen ? (<LuPlus size="1.3rem" ></LuPlus>) : (<LuMinus></LuMinus>)}
        </button>
        {
          isOpen && (
            <form className='w-11/12 items-center' onSubmit={handleSubmit}>
              <div className="flex flex-col w-full">
                <label htmlFor='ToDo' className='mb-1'>New To Do</label>
                <input
                  type='text'
                  className="w-full h-10 text-xl rounded-lg pl-2"
                  value={newItem}
                  onChange={e=> setNewItem(e.target.value)}
                ></input>
                <button className="rounded-lg border h-8 w-full my-3"> ADD </button>
              </div>
            </form>
          )
        }
        <div className={classNames({
          "flex flex-col": true,
          "justify-center": true,
          "items-center": true,
          "pt-3": true,
          "w-11/12":true
        })}>
          <div className="flex items-center w-full">
            <ul className='w-full'>
              {todos.map(todo => {
                return (
                  <li className="w-full items-center py-1 grid grid-cols-12 gap-2 justify-end" key={todo.id}>
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      className="h-5"
                      onChange={e=>toggleTodo(todo.id, todo.completed)}
                    />
                    <p className='text-xl col-span-10'>{todo.title}</p>
                    <button className='w-5 items-center' onClick={()=>deleteTodo(todo.id)}><FaTrashCan size="1.1rem"/></button>
                </li>)
              })}
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ToDo_List