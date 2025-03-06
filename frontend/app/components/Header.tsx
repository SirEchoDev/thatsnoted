import Link from "next/link";
import React from "react";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <nav className="flex justify-between items-center py-[30px]">
      <div className="logo">
        <span className="text-red-600 text-3xl font-bold">.</span>
        <span className="text-black text-3xl font-bold">Noted</span>
      </div>
      <div className="nav-links flex justify-center items-center w-full max-w-[700px] gap-x-8">
        <Link href="#" className="text-2xl">Home</Link>
        <Link href="#" className="text-2xl">Feature</Link>
        <Link href="#" className="text-2xl">Pricing</Link>
        <Link href="#" className="text-2xl">Contact</Link>
        <Link href="#" className="text-2xl">Login</Link>
      </div>
      <HeaderSocial />
    </nav>
  );
};

export default Header;
