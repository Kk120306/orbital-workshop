// API route for /api/expenses
// Handles GET (list all expenses) and POST (create a new expense)
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET: List all expenses
export async function GET() {
  const expenses = await prisma.expense.findMany({ orderBy: { date: 'desc' } });
  return NextResponse.json(expenses);
}

// POST: Create a new expense
export async function POST(req: NextRequest) {
  const { title, amount, date } = await req.json();
  const expense = await prisma.expense.create({
    data: { title, amount: parseFloat(amount), date: new Date(date) },
  });
  return NextResponse.json(expense, { status: 201 });
}
