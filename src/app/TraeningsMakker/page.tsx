import React from 'react'

const TraeningsMakker = () => {
  return (
    <main className="bg-gradient-to-b from-slate-700 to-slate-500 text-white min-h-screen">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl pt-2">TræningsMakker</h2>
        <div className="flex flex-col w-full items-center pt-5 space-y-7">
          <button className="rounded-lg bg-slate-800 w-11/12 h-12 border-2">
            Pull
          </button>
          <button className="rounded-lg bg-slate-800 w-11/12 h-12 border-2">
            Push
          </button>
          <button className="rounded-lg bg-slate-800 w-11/12 h-12 border-2">
            Leg
          </button>
          <button className="rounded-lg bg-slate-800 w-11/12 h-12 border-2">
            New
          </button>
          <button className="rounded-lg bg-slate-800 w-11/12 h-12 border-2">
            Profile
          </button>
          <button className="rounded-lg bg-slate-800 w-11/12 h-12 border-2">
            Calender 
          </button>
        </div>
      </div>
    </main>
  )
}

export default TraeningsMakker