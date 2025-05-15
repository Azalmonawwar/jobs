import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between border-b">
      {/* Left Logo */}
      <div className="text-2xl font-extrabold leading-tight pl-[60px] py-3">
        <span className="text-black">PLACEMENT</span>
        <br />
        <span className="text-orange-500">PORTAL</span>
      </div>

      {/* Right Menu */}
      <div className="flex items-center gap-6 pr-[60px] py-3">
        {/* Nav Links */}
        <Button>

          <Link href="/login" className=" text-xl">Login</Link>
        </Button>


      </div>
    </nav>
  );
}

export default Navbar;