import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'
import TM_header from './TMComponents/TMheader'

const TraeningsMakker = () => {
  const links = [
    {label: "Push", href: "./TraeningsMakker/Push" },
    {label: "Pull", href: "./TraeningsMakker/Pull" },
    {label: "Legs", href: "./TraeningsMakker/Legs" },
    {label: "Exercises", href: "./TraeningsMakker/Exercises" },
    {label: "Calender", href: "./TraeningsMakker/Calender" },
    {label: "Profile", href: "./TraeningsMakker/Profile" },
  ]

  return (
    <main className="bg-orange-400 text-white min-h-screen w-full">
      <TM_header Name="TræningsMakker"/>
      <div className='w-full flex justify-center'>
        <p className='md:text-9xl md:pt-80 text-5xl pt-80'>IN PROGRESS</p>
      </div>
    </main>
  )
}

export default TraeningsMakker