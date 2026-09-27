import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Book Vibe",
  description: "Books to freshen up your bookshelf",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}