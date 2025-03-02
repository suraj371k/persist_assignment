import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; 
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='bg-black text-white sticky top-0 z-50'>
      <nav className='flex justify-between items-center p-5 max-w-7xl mx-auto'>
        <Link to={'/'}>
          <img src={logo} alt="Logo" className="w-32 h-32" />
        </Link>

        <div className='hidden md:flex gap-8'>
          <a className='mt-2' href='#'>Ongoing Startupathon</a>
          <a className='mt-2' href='#'>Completed Startupathon</a>
          <a className='mt-2' href='#'>Startupathon Guide</a>
          <a className='mt-2' href='#'>How To Win</a>
          <a className='mt-2' href='#'>Mentor Network</a>
          <Link to={'/admin'} className='px-6 py-2 rounded-lg bg-gradient-to-r 
            from-blue-800 to-[#859ac5] text-black font-medium'>
            Admin
          </Link>
        </div>

        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className='md:hidden flex flex-col items-center gap-4 bg-black py-4 border-t border-gray-700'>
          <a href='#'>Ongoing Startupathon</a>
          <a href='#'>Completed Startupathon</a>
          <a href='#'>Startupathon Guide</a>
          <a href='#'>How To Win</a>
          <a href='#'>Mentor Network</a>
          <Link to={'/admin'} className='px-6 py-2 rounded-lg bg-gradient-to-r 
            from-blue-800 to-[#859ac5] text-black font-medium'>
            Admin
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
