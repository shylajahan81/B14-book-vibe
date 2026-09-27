import Image from 'next/image';
import Link from 'next/link';

interface BookDetailProps {
  params: {
    bookId: string;
  };
}

const booksData = [
  {
    bookId: "1",
    bookName: "The Catcher in the Rye",
    author: "Awlad Hossain",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400",
    review: "Amet consectetur. Interdum porta pulvinar non et aliquam. Nunc senectus blandit ac nisl enim elementum penatibus pellentesque ac. Nec elementum euismod nulla adipiscing lectus. Morbi elementum a auctor erat diam tellus. Elementum faucibus...",
    rating: 4.5,
    category: "Fiction",
    tags: ["Young Adult", "Identity"],
    totalPages: 281,
    publisher: "J.B Lippincott & Co.",
    yearOfPublishing: 1951
  },
  {
    bookId: "2",
    bookName: "The Psychology of Money",
    author: "Morgan Housel",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=400",
    review: "Doing well with money has a little to do with how smart you are and a lot to do with how you behave. And behavior is hard to teach, even to really smart people.",
    rating: 4.8,
    category: "Finance",
    tags: ["Business", "Investment"],
    totalPages: 252,
    publisher: "Harriman House",
    yearOfPublishing: 2020
  },
  {
    bookId: "3",
    bookName: "To Kill a Mockingbird",
    author: "Harper Lee",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400",
    review: "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it. Compassionate, dramatic, and deeply moving.",
    rating: 4.9,
    category: "Classic",
    tags: ["Fiction", "Drama"],
    totalPages: 324,
    publisher: "J.B. Lippincott & Co.",
    yearOfPublishing: 1960
  },
  {
    bookId: "4",
    bookName: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=400",
    review: "The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted gin was the national drink and sex the national obsession.",
    rating: 4.7,
    category: "Classic",
    tags: ["Fiction", "Tragedy"],
    totalPages: 180,
    publisher: "Charles Scribner's Sons",
    yearOfPublishing: 1925
  },
  {
    bookId: "5",
    bookName: "Atomic Habits",
    author: "James Clear",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=400",
    review: "No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies.",
    rating: 4.9,
    category: "Self-Help",
    tags: ["Habits", "Productivity"],
    totalPages: 320,
    publisher: "Avery",
    yearOfPublishing: 2018
  },
  {
    bookId: "6",
    bookName: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    image: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?auto=format&fit=crop&q=80&w=400",
    review: "What the rich teach their kids about money that the poor and middle class do not! Rich Dad Poor Dad is Robert's story of growing up with two dads — his real father and the father of his best friend.",
    rating: 4.6,
    category: "Finance",
    tags: ["Investing", "Wealth"],
    totalPages: 336,
    publisher: "Plata Publishing",
    yearOfPublishing: 1997
  },
  {
    bookId: "7",
    bookName: "1984",
    author: "George Orwell",
    image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&q=80&w=400",
    review: "Written in 1948, 1984 was a chilling prophecy about the future. And while 1984 has come and gone, Orwell's masterpiece is more relevant than ever.",
    rating: 4.8,
    category: "Sci-Fi",
    tags: ["Dystopian", "Classic"],
    totalPages: 328,
    publisher: "Secker & Warburg",
    yearOfPublishing: 1949
  },
  {
    bookId: "8",
    bookName: "Pride and Prejudice",
    author: "Jane Austen",
    image: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?auto=format&fit=crop&q=80&w=400",
    review: "Since its publication in 1813, Pride and Prejudice has delighted generations of readers with its witty, sharp-tongued analysis of social status, marriage, and love in Regency England.",
    rating: 4.7,
    category: "Romance",
    tags: ["Classic", "Drama"],
    totalPages: 279,
    publisher: "T. Egerton, Whitehall",
    yearOfPublishing: 1813
  },
  {
    bookId: "9",
    bookName: "The Alchemist",
    author: "Paulo Coelho",
    image: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?auto=format&fit=crop&q=80&w=400",
    review: "Paulo Coelho's masterpiece tells the mystical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure as extravagant as any ever found.",
    rating: 4.7,
    category: "Adventure",
    tags: ["Philosophy", "Fiction"],
    totalPages: 208,
    publisher: "HarperTorch",
    yearOfPublishing: 1988
  }
];

export default async function BookDetailPage({ params }: BookDetailProps) {
  const { bookId } = await params;
  
  const book = booksData.find((b) => b.bookId === bookId) || booksData[0];

  return (
    <main className="px-6 py-8 max-w-7xl mx-auto space-y-8 bg-white min-h-screen">
      {/* Book Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start py-8">
        {/* Left Side: Book Image */}
        <div className="bg-[#F3F3F3] p-12 rounded-2xl flex justify-center items-center h-[550px]">
          <img 
            src={book.image} 
            alt={book.bookName} 
            className="w-72 h-[450px] object-cover rounded shadow-lg"
          />
        </div>

        {/* Right Side: Book Info */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">{book.bookName}</h1>
          <p className="text-gray-600 font-medium">By : {book.author}</p>
          
          <hr />
          
          <p className="text-gray-600 font-medium">{book.category}</p>
          
          <hr />

          <p className="text-gray-600 text-sm leading-relaxed">
            <span className="font-bold text-gray-900">Review: </span> 
            {book.review}
          </p>

          <div className="flex items-center gap-3 pt-2">
            <span className="font-bold text-gray-900">Tag</span>
            {book.tags.map((tag, idx) => (
              <span key={idx} className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-xs font-semibold">
                #{tag}
              </span>
            ))}
          </div>

          <hr />

          {/* Details Table info */}
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex gap-12">
              <span className="w-36">Number of Pages:</span>
              <span className="font-bold text-gray-900">{book.totalPages}</span>
            </div>
            <div className="flex gap-12">
              <span className="w-36">Publisher:</span>
              <span className="font-bold text-gray-900">{book.publisher}</span>
            </div>
            <div className="flex gap-12">
              <span className="w-36">Year of Publishing:</span>
              <span className="font-bold text-gray-900">{book.yearOfPublishing}</span>
            </div>
            <div className="flex gap-12">
              <span className="w-36">Rating:</span>
              <span className="font-bold text-gray-900">{book.rating}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <button className="px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-800 hover:bg-gray-50 transition">
              Read
            </button>
            <button className="px-6 py-3 bg-[#50B1C9] text-white rounded-lg font-semibold hover:bg-[#409eb5] transition">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}