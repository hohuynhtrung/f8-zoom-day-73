import Counter from "./_components/Counter";

export default function HomePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Trang chủ</h1>
      <p className="mt-2 text-gray-600">
        Chào mừng bạn đến với trang web của tôi.
      </p>
      <Counter />
    </div>
  );
}
