import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { trpc } from "../utils/trpc";
import { useState } from "react";

export default function Index() {
  const [form, setForm] = useState({
    description: "",
    amount: 0,
  });
  const utils = trpc.useContext();
  const create = trpc.expense.create.useMutation({
    onSuccess: () => {
      setForm({
        description: "",
        amount: 0,
      });
      utils.expense.getAll.invalidate();
    },
  });

  const { data: expenses } = trpc.expense.getAll.useQuery();
  const total =
    expenses?.reduce((acc, cur) => acc + Number(cur.amount), 0) || 0;
  return (
    <div className="p-4">
      <div className="flex gap-x-2">
        <input
          type="text"
          className="rounded border px-2 py-1"
          name="description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <input
          type="number"
          className="rounded border px-2 py-1"
          name="amount"
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: Number(e.target.value) })}
        />
        <button
          type="button"
          className="rounded bg-blue-500 px-2 py-1 text-white"
          onClick={() => {
            create.mutate(form);
          }}
        >
          Add
        </button>
      </div>
      <p>List of expenses</p>
      <div className="">
        {expenses?.map((expense) => (
          <div className="flex flex-row justify-between" key={expense.id}>
            <div>{expense.description}</div>
            <div className="text-right">
              {Number(expense.amount).toLocaleString(undefined, {
                style: "currency",
                currency: "USD",
              })}
            </div>
          </div>
        ))}
        <div className="mt-2 flex flex-row justify-between font-medium">
          <div>Total</div>
          <div className="text-right">
            {Number(total).toLocaleString(undefined, {
              style: "currency",
              currency: "USD",
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
