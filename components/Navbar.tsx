"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Navbar */}
      <div className="bg-[#735751] fixed top-2 w-full z-50">
        <div className="container mx-auto flex justify-between items-center h-16 px-4">
          
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/maimoona (1).png"
              alt="logo"
              width={76}
              height={76}
              className="rounded-full"
            />
       
          <Image
              src="/Flourista (1).png"
              alt="logo"
              width={116}
              height={116}
              className="ml-5"
            />
          </div>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-white">
            <li className="hover:text-gray-300"><Link href="/">Home</Link></li>
            <li className="hover:text-gray-300"><Link href="/blog">Blog</Link></li>
            <li className="hover:text-gray-300"><Link href="/contact">Contact</Link></li>
          </ul>
          
          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} aria-label="Toggle menu" className="text-white focus:outline-none">
              {isMenuOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#735751] py-4">
            <ul className="flex flex-col items-center gap-6 text-white">
              <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
              <li><Link href="/blog" onClick={toggleMenu}>Blog</Link></li>
              <li><Link href="/contact" onClick={toggleMenu}>Contact</Link></li>
            </ul>
          </div>
        )}
      </div>

     
      <div className="h-16 md:h-20"></div>

    </>
  );
};

export default Navbar;
