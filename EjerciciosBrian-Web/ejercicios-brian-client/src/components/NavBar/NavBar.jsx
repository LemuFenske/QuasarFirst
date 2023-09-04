'use client'
import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";



export default function NavBar() {

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };


    return (
        <div className="z-40 w-full flex items-center bg-gray-950 text-white h-14 text-xl justify-end fixed font-sans shadow-md">
         <div className=" w-full">
         <div className="flex items-center justify-between">
           <h2 className="ml-3 sm:ml-28 font-bold text-white font-mono">Brian Yost Ejercicios</h2>
           <div className="hidden sm:flex justify-end">
             <Link href="/plans" className="mx-3 transform transition hover:text-gray-500">
               Planes
             </Link>
           </div>
           <div className="sm:hidden">
             <button className="mx-3 transform transition hover:text-gray-500" onClick={toggleMenu}>
               <FontAwesomeIcon className="h-6 w-6 transform hover:scale-110" icon={faBars} />
            </button>
           </div>
       </div>
        {showMenu && (
          <div className="flex flex-col bg-gray-950 mt-28">
            <Link
              href="/plans"
              className="mr-3 ml-auto my-2 transform transition hover:text-gray-500"
              onClick={toggleMenu}
            >
              Planes
            </Link>
          </div>
        )}
      </div>
        </div>
    )
  }






  