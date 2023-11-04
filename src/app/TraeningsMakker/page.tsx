import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'
import { MdOutlineKeyboardArrowLeft as BackArrow } from "react-icons/md"

const TraeningsMakker = () => {
  const links = [
    {label: "Push", href: "/Push" },
    {label: "Pull", href: "/Pull" },
    {label: "Legs", href: "/Legs" },
    {label: "Exercises", href: "/Exercises" },
    {label: "Calender", href: "/Calender" },
    {label: "Profile", href: "/Profile" },
  ]

  return (
    <main className="bg-gradient-to-b from-slate-700 to-slate-500 text-white min-h-screen">
      <header className="flex justify-center items-center">      
        <Link href="./Projects" className="absolute top-2 left-2 border rounded-xl md:hidden">
          <BackArrow size="2.5rem"></BackArrow>
        </Link>
        <h2 className="text-3xl pt-3 items-center">TræningsMakker</h2>
      </header>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col w-full items-center pt-12 space-y-7">
          {links.map(link => <Link href={link.href} key={link.href} className={classNames({
            "text-white": true,
            "text-xl":true,
            "border-2": true,
            "rounded-2xl": true,
            "bg-slate-800": true,
            "w-11/12": true,
            "items-center": true,
            "p-auto": true,
            "text-center": true,
            "py-4": true,
          })}>
            {link.label}
          </Link>)}
        </div>  
      </div>
    </main>
  )
}

export default TraeningsMakker