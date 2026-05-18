// ExpenseForm.tsx — form component for adding (and later editing) expenses
// Used in the client-side list to submit new expenses to the API
"use client";
import { useState } from "react";

type ExpenseFormProps = {
  onSubmit: (expense: { title: string; amount: number; date: string }) => void;
  initialData?: { title?: string; amount?: number; date?: string };
  submitLabel?: string;
};

export default function ExpenseForm({ onSubmit, initialData = {}, submitLabel = "Add Expense" }: ExpenseFormProps) {
  const [title, setTitle] = useState(initialData?.title || "");
  const [amount, setAmount] = useState(initialData?.amount || "");
  const [date, setDate] = useState(initialData?.date ? initialData.date.slice(0, 10) : "");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit({ title, amount: parseFloat(amount), date });
    setTitle("");
    setAmount("");
    setDate("");
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-4">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
        required
        className="border p-2 rounded w-full"
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAmount(e.target.value)}
        required
        min="0.01"
        step="0.01"
        className="border p-2 rounded w-full"
      />
      <input
        type="date"
        value={date}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDate(e.target.value)}
        required
        className="border p-2 rounded w-full"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        {submitLabel}
      </button>
    </form>
  );
}
