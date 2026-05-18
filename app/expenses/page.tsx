// app/expenses/page.tsx → the "/expenses" route.
//
// This is a SERVER component (no "use client" at the top).
// It runs on the server — great for fetching data.
// No interactivity here, so we don't need the browser at all.

import dynamic from "next/dynamic";

const ExpensesClientList = dynamic(() => import("./client-list"), { ssr: false });

export default function ExpensesPage() {
  return (
    <main className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Expenses</h1>
      <ExpensesClientList />
    </main>
  );
}
