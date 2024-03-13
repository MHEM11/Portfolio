"use client"
import Link from "next/link"
import React, { useState } from "react"
import classNames from "classnames"
import { usePathname } from "next/navigation"
import {BiSolidDownArrow as DownArrow, BiSolidLeftArrow as LeftArrow} from "react-icons/bi"


const Dropdown = () => {
  let curPath = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {label: "About", href: "/" },
    {label: "Projects", href: "/Projects" },
    {label: "FAQ", href: "/FAQ" },

  ]

  return (
    <nav className="flex w-full justify-between fixed bg-slate-700" id="large">
      <button onClick={() => setIsOpen((prev) => !prev)} className=" w-full justify-between flex items-center px-1 text-3xl">
        <ul>
              {links.map(link => <Link href={link.href} key={link.href} className={classNames({
                "text-white": true,
                "text-3xl":true,
                "px-1": true,
                "w-full": true,
                "rounded-full": true,
                "block": true,
                "hidden": link.href !== curPath,
              })}>
                {link.label}
              </Link>)}
          </ul>
        {!isOpen ? (<DownArrow size="1.3rem" ></DownArrow>) : (<LeftArrow size="1.3rem"></LeftArrow>)}
      </button>
      {
        isOpen && (
          <div className="absolute top-9 w-full rounded-b-2xl bg-slate-700 pl-1">
            <ul>
              {links.map(link => <Link href={link.href} key={link.href} className={classNames({
                "text-white": true,
                "text-3xl":true,
                "px-1": true,
                "w-full": true,
                "rounded-full": true,
                "block": true,
                "bg-slate-700": link.href !== curPath,
                "bg-slate-600": link.href === curPath,
                "hidden": link.href === curPath,
                "hover:bg-slate-800": true, 
                "my-1": true,
              })}>
                {link.label}
              </Link>)}
            </ul>
      </div>
      )}
    </nav>
    )
}
export default Dropdown