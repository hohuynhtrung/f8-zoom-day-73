"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="mt-6 flex items-center gap-4">
      <button
        onClick={() => setCount(count - 1)}
        className="rounded bg-gray-200 px-4 py-2 hover:bg-gray-300"
      >
        Giảm
      </button>
      <span className="text-xl font-semibold">{count}</span>
      <button
        onClick={() => setCount(count + 1)}
        className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Tăng
      </button>
    </div>
  );
}
