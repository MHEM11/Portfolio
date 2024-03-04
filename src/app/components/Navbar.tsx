"use client"
import Link from "next/link"
import React from "react"
import classNames from "classnames"
import { usePathname } from "next/navigation"
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import {IoIosMail} from "react-icons/io"

const Navbar = () => {
  let curPath = usePathname();

  const links = [
    {label: "About", href: "/" },
    {label: "Projects", href: "/Projects" },
    {label: "FAQ", href: "/FAQ"}
  ]
  
  return (
    <nav className="flex items-center justify-center h-16" id="small">
      <div className="">
      <ul className="flex space-x-12">
              {links.map(link => <Link href={link.href} key={link.href} className={classNames({
                "text-white":true, 
                "text-2xl":true,
                "rounded-full":true,
                "px-4": true,
                "bg-slate-700": link.href !== curPath,
                "bg-slate-600": link.href === curPath,
                "hover:bg-slate-800": true,
                "hover:scale-105": true,
                "transition-colors ":true
              })}>
  {link.label}
</Link>)}
            </ul>
      </div>
      <div className="right-2 fixed top-2.5 flex items-center space-x-3" >
        <a className="hover:scale-110" href="mailto:jensenmagnushem@gmail.com">
          <IoIosMail size="2.5rem"/>
        </a>
        <a className="hover:scale-110" href="https://www.linkedin.com/in/magnus-hem-jensen-7112b0225/" target="_blank" rel="noreferrer">
          <FaLinkedin size="2.5rem"></FaLinkedin>
        </a>
        <a className="hover:scale-110" href="https://github.com/MHEM11" target="_blank" rel="noreferrer">
          <FaGithub size="2.5rem" ></FaGithub>
        </a>
      </div>
    </nav>
  )
}

export default Navbar