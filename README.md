
# Next.js Workshop — Part 4: CRUD

> **Orbital 2026** · Developer Student Club NUS
> Branch: `part-4-CRUD`
> 

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

---

## 3. Page Rendering

### c. ExpensesClientList
- **File:** `app/expenses/client-list.tsx`
- **Purpose:**
  - Fetches expenses from API
  - Renders list of `ExpenseCard`s
  - Handles add, edit and delete actions

### d. Expenses Page
- **File:** `app/expenses/page.tsx`
- **Purpose:**
  - Main page for expenses
  - Renders the `ExpensesClientList` component

---

## 4. Data Validation Check + Frontend Error Display

### a. Server-side validation
- **File:** `app/api/expenses/route.ts`
- **File:** `app/api/expenses/[id]/route.ts`
- **Logic:**
  - Add logic to check if the data has been passed over and in the correct format e.g. if (!title || typeof title !== 'string')
  - If the data was not correctly passed, throw an error using NextResponse.json with the error & status code

### b. Client-side validation
- **File:** `app\expenses\client-list.tsx`
- **Logic:**
  - Use try catch blocks to catch errors
  - console.error() to log the problem
    
---

## 5. Navbar

### a. Navbar
- **File:** `components\Navbar.tsx`
- **Purpose:** Displays a header to route between pages (home, expenses, about)

### b. Page
- **File:** `app\layout.tsx`
- **Purpose:** Update to use the Navbar
    
---

## 6. File Structure After CRUD Setup

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
  Navbar.tsx       # Navbar
prisma/
  schema.prisma         # Expense model
```

---

## 7. How the CRUD Flow Works

1. **User visits `/expenses`**
2. `ExpensesClientList` fetches all expenses from `/api/expenses` (GET)
3. User adds an expense using `ExpenseForm` (POST to `/api/expenses`)
4. User deletes an expense (DELETE to `/api/expenses/[id]`)
5. (Optional) User edits an expense (PATCH to `/api/expenses/[id]`)

---




