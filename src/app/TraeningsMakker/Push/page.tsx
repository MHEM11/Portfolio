'use client'
import React, { useState } from 'react'
import TM_header from '../TMComponents/TMheader'
import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/dist/client/components/navigation'
import {BiSolidDownArrow as DownArrow, BiSolidLeftArrow as LeftArrow} from "react-icons/bi"

const Push = () => {
  const [isOpen, setIsOpen] = useState(false);
  let curPath = usePathname();
  
  const links = [
    {label: "Push", href: "./TraeningsMakker" },
    {label: "Pull", href: "./TraeningsMakker" },
    {label: "Legs", href: "./TraeningsMakker" },
    {label: "Exercises", href: "./TraeningsMakker" },
    {label: "Calender", href: "./TraeningsMakker" },
    {label: "Profile", href: "./TraeningsMakker" },
  ]


  return (
    <main className="bg-orange-400 text-white min-h-screen">
      <TM_header Name="Push" />
      <div className="flex flex-col w-full items-center space-y-7">
        <ul>
            {links.map(link => <button onClick={() => setIsOpen((prev) => !prev)} className=
              {classNames({
                "text-white": true,
                "text-xl":true,
                "border-2": true,
                "rounded-2xl": true,
                "bg-blue-600": true,
                "w-full": true,
                "items-center": true,
                "text-center": true,
                "block": true,
                "py-4": true,           
              })}>
                {link.label}
        {!isOpen ? (<DownArrow size="1.3rem" ></DownArrow>) : (<LeftArrow size="1rem"></LeftArrow>)}
            </button>)}
          </ul>
      </div>  
    </main>
  )
}

export default Push