"use client"

import Image from "next/image";
import Link from "next/link"
import { useState } from "react";


const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];


const NavBar = () => {
  const[open, setOpen] = useState(false);


  return (
    <>
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">

        <div className="hidden md:flex gap-8">
        {links.map((link) => (
          <Link href={link.url} key={link.title}>{link.title}</Link>
        ))}

        </div>

        {/* Small Screens */}
        {/* LOGO */}
        <div className="md:hidden">
          <Link href='/' className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center">
          <span className="text-white mr-1">Lama</span>
          <span className="text-black bg-white rounded-md w-12 h-8 flex items-center justify-center">.dev</span>
          </Link>
        </div>
        
        <div>
        <Link href="/">
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/dribbble.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/instagram.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/facebook.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/pinterest.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </Link>
        </div>

        <div className="md:hidden">
          <button className="w-10 h-10 flex flex-col justify-between z-50 relative" onClick={() => setOpen((prev) => !prev)}>
            <div className="w-10 h-1 bg-white rounded"></div>
            <div className="w-10 h-1 bg-white rounded"></div>
            <div className="w-10 h-1 bg-white rounded"></div>
          </button>

          {/* LINK LIST */}

          { open &&
          <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">
        {links.map((link) => (
          <Link href={link.url} key={link.title}>{link.title}</Link>
        ))}
          </div>
          }
        </div>
    </div>
    </>
  )
}

export default NavBar