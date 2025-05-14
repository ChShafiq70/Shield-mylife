"use client";
import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="bg-[#E74C3C] text-white text-center md:text-end py-2  md:px-30 text-lg">
        Questions? Call now 1-844-344-4666
      </div>
      <nav className="bg-[#F6F6F6] py-4 px-4 md:px-30 flex justify-between items-center relative">
        <div className="flex items-center space-x-2">
          <Image src="/images/logo.webp" alt="Shield My Life" width={250} height={100} />
        </div>
        <ul className="hidden md:flex space-x-6 font-semibold text-black"
        style={{ fontFamily: "Poppins, sans-serif"}}>
          <li><Link href="/" className="hover:text-red-500">Home</Link></li>
          <li><Link  href="/home-system" className="hover:text-red-500">Home System</Link></li>
          <li><Link href="mobile-system" className="hover:text-red-500">Mobile System</Link></li>
          <li><Link href="/fall-detaction" className="hover:text-red-500">Fall Detection</Link></li>
          <li><Link href="/smart-watches" className="hover:text-red-500">Smart Watches</Link></li>
        </ul>
        <button href="#" className="hidden md:block bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600">
          Contact Us
        </button>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="text-white bg-[#E74C3C] w-8 h-6" />}
        </button>
      </nav>
      <div
        className={`fixed inset-0  bg-gray-100 bg-opacity-90 transition-opacity duration-800 ${menuOpen ?  "translate-x-0" : "-translate-x-full"} transition-transform ease-in-out duration-700 md:hidden`} 
        onClick={() => setMenuOpen(false)}
      ></div>
      <div
        className={`fixed top-0 left-0 w-80 h-full bg-white shadow-2xl p-6 transform ${menuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform ease-in-out duration-2000 md:hidden`}
      >
        <button className="absolute top-4 right-4" onClick={() => setMenuOpen(false)}>
          <X className="text-black w-6 h-6" />
        </button>
        <ul className="flex flex-col space-y-4 mt-10 font-semibold text-black"
         style={{ fontFamily: "Poppins, sans-serif"}}>
          <li><Link href="/" className="hover:text-red-500">Home</Link></li>
          <li><Link href="/home-system" className="hover:text-red-500">Home System</Link></li>
          <li><Link href="/mobile-system" className="hover:text-red-500">Mobile System</Link></li>
          <li><Link href="/fall-detaction" className="hover:text-red-500">Fall Detection</Link></li>
          <li><Link href="/smart-watches" className="hover:text-red-500">Smart Watches</Link></li>
        </ul>
        <a href="#" className="block mt-6 bg-red-500 text-white py-2 px-4 rounded-lg text-center hover:bg-red-600">
          Contact Us
        </a>
      </div>
    </header>
  );
};

export default Header;
