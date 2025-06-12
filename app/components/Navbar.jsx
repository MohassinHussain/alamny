'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '../context/ThemeContext';
import Image from 'next/image';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const pathname = usePathname();

  return (
    <nav className={`fixed w-full z-50 transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900' : 'bg-white'
    } opacity-98`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className={`text-2xl font-bold ${
              isDarkMode ? 'text-emerald-400' : 'text-emerald-600'
            }`}>
              <Image src="/images/logo.png" alt="Alamny" width={60} height={60} className='rounded-sm m-2' />
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className={`w-full px-4 py-2 rounded-lg transition-colors duration-300 ${
                  isDarkMode 
                    ? 'bg-gray-800 text-white placeholder-gray-400' 
                    : 'bg-gray-100 text-gray-900 placeholder-gray-500'
                } focus:outline-none focus:ring-2 focus:ring-emerald-400`}
              />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-4">
            
            <Link 
              href="/home" 
              className={`${
                pathname === '/home' 
                  ? 'text-emerald-400' 
                  : isDarkMode ? 'text-gray-300' : 'text-gray-700'
              } hover:text-emerald-400 transition-colors`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`${
                pathname === '/about' 
                  ? 'text-emerald-400' 
                  : isDarkMode ? 'text-gray-300' : 'text-gray-700'
              } hover:text-emerald-400 transition-colors`}
            >
              About
            </Link>
            <Link 
              href="/student" 
              className={`${
                pathname === '/student' 
                  ? 'text-emerald-400' 
                  : isDarkMode ? 'text-gray-300' : 'text-gray-700'
              } hover:text-emerald-400 transition-colors`}
            >
              Student
            </Link>
            <Link 
              href="/login" 
              className="px-4 py-2 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 transition-colors"
            >
              Login
            </Link>
            {/* <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                isDarkMode 
                  ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? '🌞' : '🌙'}
            </button> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 