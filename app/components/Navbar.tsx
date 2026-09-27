import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm max-w-7xl mx-auto">
      <div className="text-xl font-bold text-gray-800">
        Book Vibe
      </div>

      <div className="flex items-center space-x-6">
        <Link 
          href="/" 
          className="px-4 py-2 border border-green-500 text-green-600 rounded-lg font-medium"
        >
          Home
        </Link>
        <Link 
          href="/listed-books" 
          className="text-gray-600 hover:text-green-600 font-medium"
        >
          Listed Books
        </Link>
        <Link 
          href="/pages-to-read" 
          className="text-gray-600 hover:text-green-600 font-medium"
        >
          Pages to Read
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <button className="px-5 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition">
          Sign In
        </button>
        <button className="px-5 py-2 bg-cyan-500 text-white rounded-lg font-medium hover:bg-cyan-600 transition">
          Sign Up
        </button>
      </div>
    </nav>
  );
}