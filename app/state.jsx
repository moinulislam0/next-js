"use client";

import { useState } from "react";

export default function State() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center gap-4 rounded-xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm">
      <p className="text-lg font-medium text-zinc-700">
        This is the state component
      </p>
      <p className="text-3xl font-bold text-zinc-900">{count}</p>
      <button
        type="button"
        onClick={() => setCount((pre) => pre + 1)}
        className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-800"
      >
        Increase count
      </button>
    </div>
  );
}
