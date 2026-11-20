export default async function ProductDetailPage({ params }) {
  const { id } = await params;

  return (
    <div>
      <h1 className="text-3xl font-bold">Chi tiết sản phẩm</h1>
      <p className="mt-2 text-gray-600">Chi tiết sản phẩm có mã: {id}</p>
    </div>
  );
}
