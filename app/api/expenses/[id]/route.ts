// API route for /api/expenses/[id]
// Handles PATCH (update an expense) and DELETE (delete an expense)
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET: Get a single expense (optional, for completeness)
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  const expense = await prisma.expense.findUnique({ where: { id } });
  if (!expense) return NextResponse.json({ error: 'Expense not found' }, { status: 404 });
  return NextResponse.json(expense);
}

// PATCH: Update an expense
export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  const { title, amount, date } = await req.json();
  const expense = await prisma.expense.update({
    where: { id },
    data: { title, amount: parseFloat(amount), date: new Date(date) },
  });
  return NextResponse.json(expense);
}

// DELETE: Delete an expense
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  await prisma.expense.delete({ where: { id } });
  return NextResponse.json({ message: 'Expense deleted' });
}
