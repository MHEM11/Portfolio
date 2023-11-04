import Link from 'next/link'
import React from 'react'
import { MdOutlineKeyboardArrowLeft as BackArrow } from "react-icons/md"

const TraeningsMakker = () => {
  return (
    <main className="bg-gradient-to-b from-slate-700 to-slate-500 text-white min-h-screen">
      <header className="flex justify-center items-center">      
        <Link href="./Projects" className="absolute top-2 left-2 border rounded-md">
          <BackArrow size="2.5rem"></BackArrow>
        </Link>
        <h2 className="text-3xl pt-3 items-center">TræningsMakker</h2>
      </header>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col w-full items-center pt-12 space-y-7">
          <button className="rounded-lg bg-slate-800 w-11/12 h-14 border-2 text-xl">
            Pull
          </button>
          <button className="rounded-lg bg-slate-800 w-11/12 h-14 border-2 text-xl">
            Push
          </button>
          <button className="rounded-lg bg-slate-800 w-11/12 h-14 border-2 text-xl">
            Leg
          </button>
          <button className="rounded-lg bg-slate-800 w-11/12 h-14 border-2 text-xl">
            New
          </button>
          <button className="rounded-lg bg-slate-800 w-11/12 h-14 border-2 text-xl">
            Profile
          </button>
          <button className="rounded-lg bg-slate-800 w-11/12 h-14 border-2 text-xl">
            Calender 
          </button>
        </div>  
      </div>
    </main>
  )
}

export default TraeningsMakker