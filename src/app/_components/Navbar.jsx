import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex max-w-3xl gap-6 p-4">
        <Link href="/" className="hover:text-blue-600">
          Trang chủ
        </Link>
        <Link href="/about" className="hover:text-blue-600">
          Giới thiệu
        </Link>
        <Link href="/products" className="hover:text-blue-600">
          Sản phẩm
        </Link>
        <Link href="/contact" className="hover:text-blue-600">
          Liên hệ
        </Link>
      </div>
    </nav>
  );
}
