import Link from 'next/link';
import Image from 'next/image';

interface Book {
  bookId: number;
  bookName: string;
  author: string;
  image: string;
  rating: number;
  category: string;
  tags: string[];
}

export default function BookCard({ book }: { book: Book }) {
  return (
    <Link href={`/books/${book.bookId}`} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between">
      <div>
        <div className="bg-[#F3F3F3] rounded-xl py-6 flex justify-center items-center mb-6">
          <img src={book.image} alt={book.bookName} className="h-40 object-cover rounded shadow" />
        </div>
        <div className="flex gap-2 mb-4">
          {book.tags.map((tag, idx) => (
            <span key={idx} className="text-xs bg-green-50 text-[#23BE0A] px-3 py-1 rounded-full font-medium">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{book.bookName}</h3>
        <p className="text-gray-500 text-sm mb-4">By: {book.author}</p>
      </div>
      
      <div className="border-t border-dashed border-gray-200 pt-4 flex justify-between items-center text-gray-500 text-sm font-medium">
        <span>{book.category}</span>
        <div className="flex items-center gap-1">
          <span>{book.rating}</span>
          <span className="text-yellow-400">★</span>
        </div>
      </div>
    </Link>
  );
}