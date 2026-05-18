# Step-by-Step Guide: Building CRUD Features for Expense Tracker (Next.js + Prisma + PostgreSQL)

This guide explains the files, structure, and code added to implement full CRUD (Create, Read, Update, Delete) features for your expense tracker app.


---

## 1. API Routes for CRUD Operations

### a. List & Create Expenses (GET, POST)
- **File:** `app/api/expenses/route.ts`
- **Purpose:**
  - `GET`: Fetch all expenses
  - `POST`: Add a new expense
- **Use Case:** 
  - Used for actions on the entire collection (e.g., list all expenses with GET, create a new expense with POST)
  - No dynamic parameter in the URL

### b. Update & Delete Expense (PATCH, DELETE)
- **File:** `app/api/expenses/[id]/route.ts`
- **Purpose:**
  - `PATCH`: Update an expense by ID
  - `DELETE`: Delete an expense by ID
- **Use Case:** 
  - Used for actions on a specific expense (e.g., update or delete a single expense by its ID)
  - [id] is a dynamic route segment, so you can access the id parameter in your handler
        E.g. /api/expenses/<id> (e.g., /api/expenses/abc123)

---

## 2. Frontend Components

### a. ExpenseCard (Previously Created)
- **File:** `components/ExpenseCard.tsx`
- **Purpose:** Displays a single expense (title, amount, date)

### b. ExpenseForm
- **File:** `components/ExpenseForm.tsx`
- **Purpose:** Form to add a new expense (or edit in future)

### c. ExpensesClientList
- **File:** `app/expenses/client-list.tsx`
- **Purpose:**
  - Fetches expenses from API
  - Renders list of `ExpenseCard`s
  - Handles add and delete actions

### d. Expenses Page
- **File:** `app/expenses/page.tsx`
- **Purpose:**
  - Main page for expenses
  - Renders the `ExpensesClientList` component

---

## 3. File Structure After CRUD Setup

```
app/
  api/
    expenses/
      route.ts           # GET (list), POST (create)
      [id]/
        route.ts         # PATCH (update), DELETE (delete)
  expenses/
    page.tsx            # Main expenses page
    client-list.tsx     # Client-side CRUD logic
components/
  ExpenseCard.tsx       # Expense display card
  ExpenseForm.tsx       # Add/edit expense form
prisma/
  schema.prisma         # Expense model
```

---

## 4. How the CRUD Flow Works

1. **User visits `/expenses`**
2. `ExpensesClientList` fetches all expenses from `/api/expenses` (GET)
3. User adds an expense using `ExpenseForm` (POST to `/api/expenses`)
4. User deletes an expense (DELETE to `/api/expenses/[id]`)
5. (Optional) User edits an expense (PATCH to `/api/expenses/[id]`)

---




