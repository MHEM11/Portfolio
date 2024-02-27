'use client'
import React, { useState } from 'react'
import ToDo_Header from './Components/ToDo_Header'
import {BiSolidDownArrow as DownArrow, BiSolidLeftArrow as LeftArrow} from "react-icons/bi"

import classNames from 'classnames'

const ToDo_List = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <main>
      <ToDo_Header Name="To Do List"></ToDo_Header>
      <button onClick={() => setIsOpen((prev) => !prev)} className=" w-full justify-between flex items-center px-1 text-3xl">
        <div>
          Add new to do
        </div>
      {!isOpen ? (<DownArrow size="1.3rem" ></DownArrow>) : (<LeftArrow size="1.3rem"></LeftArrow>)}
      </button>
      {
        isOpen && (
          <div className="absolute pl-10 flex flex-col w-full">
            <input type='text' className="w-11/12 h-8 rounded-lg"></input>
            <button className="rounded-lg border w-11/12"> ADD </button>
          </div>
        )
      }
      <div className={classNames({
          "flex flex-col": true,
          "justify-center": true,
          "items-center": true,
          "pt-6": !isOpen,
          "pt-28": isOpen,
        })}>
        <div className="px-6 flex flex-row justify-between items-center">
          <input type="checkbox" className="w-6 h-6" />
          <p className="w-10/12">INSERT TODO HERE AND THIS CAN BE A LONG MESSAGE/TODO</p>
        </div>
      </div>
    </main>
  )
}

export default ToDo_List