'use client';
import { useState } from 'react';
import Link from 'next/link';

const booksData = [
  {
    bookId: "1",
    bookName: "The Catcher in the Rye",
    author: "Awlad Hossain",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400",
    category: "Fiction",
    tags: ["Young Adult", "Identity"],
    totalPages: 281,
    publisher: "J.B Lippincott & Co.",
    yearOfPublishing: 1951,
    rating: 4.5
  },
  {
    bookId: "2",
    bookName: "The Psychology of Money",
    author: "Morgan Housel",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=400",
    category: "Finance",
    tags: ["Business", "Investment"],
    totalPages: 252,
    publisher: "Harriman House",
    yearOfPublishing: 2020,
    rating: 4.8
  },
  {
    bookId: "3",
    bookName: "To Kill a Mockingbird",
    author: "Harper Lee",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400",
    category: "Classic",
    tags: ["Fiction", "Drama"],
    totalPages: 324,
    publisher: "J.B. Lippincott & Co.",
    yearOfPublishing: 1960,
    rating: 4.9
  },
  {
    bookId: "4",
    bookName: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=400",
    category: "Classic",
    tags: ["Fiction", "Tragedy"],
    totalPages: 180,
    publisher: "Charles Scribner's Sons",
    yearOfPublishing: 1925,
    rating: 4.7
  },
  {
    bookId: "5",
    bookName: "Atomic Habits",
    author: "James Clear",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=400",
    category: "Self-Help",
    tags: ["Habits", "Productivity"],
    totalPages: 320,
    publisher: "Avery",
    yearOfPublishing: 2018,
    rating: 4.9
  },
  {
    bookId: "6",
    bookName: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    image: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?auto=format&fit=crop&q=80&w=400",
    category: "Finance",
    tags: ["Investing", "Wealth"],
    totalPages: 336,
    publisher: "Plata Publishing",
    yearOfPublishing: 1997,
    rating: 4.6
  },
  {
    bookId: "7",
    bookName: "1984",
    author: "George Orwell",
    image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&q=80&w=400",
    category: "Sci-Fi",
    tags: ["Dystopian", "Classic"],
    totalPages: 328,
    publisher: "Secker & Warburg",
    yearOfPublishing: 1949,
    rating: 4.8
  },
  {
    bookId: "8",
    bookName: "Pride and Prejudice",
    author: "Jane Austen",
    image: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?auto=format&fit=crop&q=80&w=400",
    category: "Romance",
    tags: ["Classic", "Drama"],
    totalPages: 279,
    publisher: "T. Egerton, Whitehall",
    yearOfPublishing: 1813,
    rating: 4.7
  },
  {
    bookId: "9",
    bookName: "The Alchemist",
    author: "Paulo Coelho",
    image: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?auto=format&fit=crop&q=80&w=400",
    category: "Adventure",
    tags: ["Philosophy", "Fiction"],
    totalPages: 208,
    publisher: "HarperTorch",
    yearOfPublishing: 1988,
    rating: 4.7
  }
];

export default function ListedBooksPage() {
  const [activeTab, setActiveTab] = useState('read');
  const [sortBy, setSortBy] = useState('');

  // সর্টিং লজিক
  const sortedBooks = [...booksData].sort((a, b) => {
    if (sortBy === 'rating') {
      return b.rating - a.rating;
    } else if (sortBy === 'pages') {
      return b.totalPages - a.totalPages;
    } else if (sortBy === 'year') {
      return b.yearOfPublishing - a.yearOfPublishing;
    }
    return 0;
  });

  return (
    <main className="px-6 py-8 max-w-7xl mx-auto space-y-8 bg-white min-h-screen">
      <h1 className="text-3xl font-bold text-center bg-gray-100 py-6 rounded-2xl text-gray-800">Books</h1>
      
      {/* Sort By Dropdown */}
      <div className="flex justify-center">
        <select 
          value={sortBy} 
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-[#23BE0A] text-white px-6 py-3 rounded-lg font-semibold cursor-pointer outline-none"
        >
          <option value="" disabled>Sort By</option>
          <option value="rating">Rating</option>
          <option value="pages">Number of pages</option>
          <option value="year">Publisher year</option>
        </select>
      </div>

      <div className="flex border-b border-gray-200">
        <button 
          onClick={() => setActiveTab('read')}
          className={`px-6 py-3 font-semibold border-b-2 transition ${activeTab === 'read' ? 'border-[#23BE0A] text-[#23BE0A]' : 'border-transparent text-gray-500'}`}
        >
          Read Books
        </button>
        <button 
          onClick={() => setActiveTab('wishlist')}
          className={`px-6 py-3 font-semibold border-b-2 transition ${activeTab === 'wishlist' ? 'border-[#23BE0A] text-[#23BE0A]' : 'border-transparent text-gray-500'}`}
        >
          Wishlist Books
        </button>
      </div>

      {/* Book List Section */}
      <div className="space-y-6">
        {sortedBooks.map((book) => (
          <div key={book.bookId} className="border border-gray-200 rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-center justify-between shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-center w-full">
              <div className="bg-gray-100 p-4 rounded-xl flex justify-center items-center w-40 h-48">
                <img src={book.image} alt={book.bookName} className="w-full h-full object-cover rounded shadow" />
              </div>
              <div className="space-y-3 w-full">
                <h3 className="text-2xl font-bold text-gray-900">{book.bookName}</h3>
                <p className="text-gray-600 font-medium">By : {book.author}</p>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-900">Tag</span>
                    {book.tags.map((tag, idx) => (
                      <span key={idx} className="bg-green-50 text-[#23BE0A] px-3 py-1 rounded-full text-xs font-semibold">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-gray-500">📅 Year of Publishing: {book.yearOfPublishing}</span>
                </div>

                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                  <span>Publisher: {book.publisher}</span>
                  <span>Page {book.totalPages}</span>
                </div>

                <hr className="my-2" />

                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <span className="bg-blue-50 text-[#328EFF] px-4 py-2 rounded-full text-xs font-semibold">
                    Category: {book.category}
                  </span>
                  <span className="bg-orange-50 text-[#FFAC33] px-4 py-2 rounded-full text-xs font-semibold">
                    Rating: {book.rating}
                  </span>
                  <Link 
                    href={`/books/${book.bookId}`} 
                    className="bg-[#23BE0A] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-green-700 transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}