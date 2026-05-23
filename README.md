# Next.js Workshop — Part 1: Setup & Tour

> **Orbital 2026** · Developer Student Club NUS
> Branch: `part-1-setup`

---

## Starting from scratch (optional reading)

If you want to create a new Next.js project from scratch outside of this workshop, run:

> **Orbital 2026** · Developer Student Club NUS
> Branch: `part-5-deployment`

# Deployment Fixes

## 1. Fixed TypeScript Error in `ExpenseForm.tsx`

The `amount` field caused a TypeScript type mismatch during Vercel deployment because HTML input values are stored as strings by default.

### Fix

Stored the `amount` state as a string:

```tsx
const [amount, setAmount] = useState<string>(
  initialData?.amount?.toString() || ""
);
```

<<<<<<< HEAD
Then converted it back into a number during form submission:

```tsx
onSubmit({
  title,
  amount: parseFloat(String(amount)),
  date
});
```

### Why

`<input type="number" />` still returns string values in React, so explicit conversion is required for TypeScript and Prisma compatibility.

---

## 2. Auto-Generated Prisma Client on Vercel

Vercel deployment initially failed because Prisma Client was not generated during the build process.

### Fix

Added a `postinstall` script inside `package.json`:

```json
"postinstall": "prisma generate"
```

<<<<<<< HEAD
You'll be prompted with a few options. For this workshop's setup, choose:
=======
You'll be prompted to choose a few options. For a setup similar to this repo, select:
>>>>>>> parent of 242fe52 (Revert "Part 5 deployment")

- TypeScript → **Yes**
- ESLint → **Yes**
- Tailwind CSS → **Yes**
- `src/` directory → **No**
- App Router → **Yes**
- Customize import alias → **No**

Then `cd my-app && npm run dev` to get started.

---

## Getting started (follow along in the workshop)

### 1. Clone the repo

```bash
git clone https://github.com/YOUR_REPO_URL
cd orbital-nextjs-workshop
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up your environment variables

Copy the example env file:

```bash
cp .env.example .env
```

Then open `.env` and fill in your database URL (you'll get this from Neon in Part 3):

```
DATABASE_URL="your-neon-connection-string-here"
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. You should see the app running.

---

<<<<<<< HEAD
## Project structure
=======
### Why
=======
## Folder structure
>>>>>>> parent of 242fe52 (Revert "Part 5 deployment")

This ensures Prisma Client and database types are automatically generated whenever dependencies are installed on Vercel.

---

## 3. Added `vercel.json`

Created a `vercel.json` configuration file:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "framework": "nextjs",
  "buildCommand": "npm run build"
}
```

### Why

This explicitly tells Vercel:

- The project uses Next.js
- Which build command to run
- How the deployment should be configured

This helps prevent incorrect framework detection during deployment.

---

# Deploying to Vercel
>>>>>>> part-5-deployment

1. Sign up or log in to Vercel.
2. Click **Add New Project**.
3. Select the GitHub repository containing the Expense Tracker project.
4. Add the required environment variables (e.g. `DATABASE_URL`).
5. Click **Deploy**.
6. Vercel will automatically:
   - Clone the repository
   - Install dependencies
   - Generate Prisma Client
   - Build the Next.js application
   - Show build logs/errors if any occur
7. If the build is successful, Vercel will generate a live deployment URL/custom domain for the application.

Example:

```txt
https://expense-tracker.vercel.app
```
<<<<<<< HEAD
orbital-nextjs-workshop/
  app/
    page.tsx              # home page → route: /
    expenses/
      page.tsx            # expense list → route: /expenses
      actions.ts          # server actions (we'll fill these in during the workshop)
  components/
    ExpenseCard.tsx       # pre-built card UI for displaying an expense
    ExpenseForm.tsx       # form for adding expenses (we'll build this in Part 4)
  lib/
    db.ts                 # Prisma client singleton
  prisma/
    schema.prisma         # database schema — defines the Expense model
  .env.example            # template for your environment variables
  .gitignore              # includes .env so secrets don't get committed
  README.md               # you're reading it!
```

## Questions?

<<<<<<< HEAD
## Resources

- [Next.js docs](https://nextjs.org/docs)
- [Prisma docs](https://www.prisma.io/docs)
- [Neon docs](https://neon.tech/docs)
- [Vercel deployment guide](https://vercel.com/docs/deployments/overview)
=======
>>>>>>> part-5-deployment
=======
Reach out to us on Telegram:
- Kai — @kai120306
- Shermaine — @soheepyying
>>>>>>> parent of 242fe52 (Revert "Part 5 deployment")
