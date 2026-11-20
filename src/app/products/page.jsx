import Link from "next/link";

export default async function ProductsPage({ searchParams }) {
  const { page } = await searchParams;
  const currentPage = page || 1;

  return (
    <div>
      <h1 className="text-3xl font-bold">Sản phẩm</h1>
      <p className="mt-2 text-gray-600">
        Danh sách các sản phẩm của chúng tôi.
      </p>
      <p className="mt-4">Trang hiện tại: {currentPage}</p>

      <div className="mt-4 flex gap-4">
        <Link href="/products/1" className="text-blue-600 hover:underline">
          Sản phẩm 1
        </Link>
        <Link href="/products/2" className="text-blue-600 hover:underline">
          Sản phẩm 2
        </Link>
        <Link href="/products/3" className="text-blue-600 hover:underline">
          Sản phẩm 3
        </Link>
      </div>
    </div>
  );
}
