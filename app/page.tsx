import Link from 'next/link';
import Image from 'next/image';
import heroImg from '@/assets/hero_img.jpg';

interface Book {
  bookId: number;
  bookName: string;
  author: string;
  image: string;
  rating: number;
  category: string;
  tags: string[];
}

function BookCard({ book }: { book: Book }) {
  return (
    <Link href={`/books/${book.bookId}`} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between">
      <div>
        <div className="bg-[#F3F3F3] rounded-xl py-6 flex justify-center items-center mb-6 h-52">
          <img src={book.image} alt={book.bookName} className="h-40 object-contain rounded shadow" />
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

const booksData = [
  {
    bookId: 1,
    bookName: "The Catcher in the Rye",
    author: "Awlad Hossain",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400",
    rating: 4.5,
    category: "Fiction",
    tags: ["Young Adult", "Identity"]
  },
  {
    bookId: 2,
    bookName: "The Psychology of Money",
    author: "Morgan Housel",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=400",
    rating: 4.8,
    category: "Finance",
    tags: ["Business", "Investment"]
  },
  {
    bookId: 3,
    bookName: "To Kill a Mockingbird",
    author: "Harper Lee",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400",
    rating: 4.9,
    category: "Classic",
    tags: ["Fiction", "Drama"]
  },
  {
    bookId: 4,
    bookName: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=400",
    rating: 4.7,
    category: "Classic",
    tags: ["Fiction", "Tragedy"]
  },
  {
    bookId: 5,
    bookName: "Atomic Habits",
    author: "James Clear",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=400",
    rating: 4.9,
    category: "Self-Help",
    tags: ["Habits", "Productivity"]
  },
  {
    bookId: 6,
    bookName: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    image: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?auto=format&fit=crop&q=80&w=400",
    rating: 4.6,
    category: "Finance",
    tags: ["Investing", "Wealth"]
  },
  {
    bookId: 7,
    bookName: "1984",
    author: "George Orwell",
    image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&q=80&w=400",
    rating: 4.8,
    category: "Sci-Fi",
    tags: ["Dystopian", "Classic"]
  },
  {
    bookId: 8,
    bookName: "Pride and Prejudice",
    author: "Jane Austen",
    image: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?auto=format&fit=crop&q=80&w=400",
    rating: 4.7,
    category: "Romance",
    tags: ["Classic", "Drama"]
  },
  {
    bookId: 9,
    bookName: "The Alchemist",
    author: "Paulo Coelho",
    image: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?auto=format&fit=crop&q=80&w=400",
    rating: 4.7,
    category: "Adventure",
    tags: ["Philosophy", "Fiction"]
  }
];

export default function Home() {
  return (
    <main className="px-6 py-8 max-w-7xl mx-auto space-y-16">
      
      <div className="bg-[#F3F3F3] rounded-3xl p-12 md:p-20 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-xl space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Books to freshen up your bookshelf
          </h1>
          <div>
            <Link 
              href="/listed-books" 
              className="inline-block px-7 py-4 bg-[#23BE0A] text-white font-semibold rounded-xl hover:bg-green-700 transition"
            >
              View The List
            </Link>
          </div>
        </div>

        <div className="mt-10 md:mt-0">
          <Image 
            src={heroImg} 
            alt="Hero Book" 
            className="w-56 md:w-64 h-80 object-cover rounded-xl shadow-2xl"
          />
        </div>
      </div>

      <section>
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {booksData.map((book) => (
            <BookCard key={book.bookId} book={book} />
          ))}
        </div>
      </section>

    </main>
  );
}