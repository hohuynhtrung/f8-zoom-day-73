import "./globals.css";
import Navbar from "./_components/Navbar";

export const metadata = {
  title: "Bài tập Next.js",
  description: "Bài tập Next.js của F8",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <Navbar />
        <main className="mx-auto max-w-3xl p-6">{children}</main>
      </body>
    </html>
  );
}
