"use client";

import State from "./state";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 p-6 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col items-center justify-center rounded-2xl bg-white p-8 shadow-sm dark:bg-zinc-900">
        <State />
      </main>
    </div>
  );
}
