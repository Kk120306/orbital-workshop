# Building a Full-Stack Web App with Next.js

> NUS Orbital 2026 — Developer Student Club Workshop
> Conducted by Kai Kameyama & Shermaine Soh

In this workshop, we build a full-stack **expense tracker** app from scratch using Next.js, Prisma, and PostgreSQL (Neon), and deploy it live on Vercel.

---

## Workshop outline

| Part | Topic | Duration | Presenter |
|------|-------|----------|-----------|
| 1 | Setup & repo tour | 10 min | Kai |
| 2 | Routing & pages | 25 min | Kai |
| 3 | Database integration | 20 min | Kai |
| 4 | CRUD features | 40 min | Shermaine |
| 5 | Deploy & wrap-up | 15 min | Shermaine |

---

## Branch structure

Each branch is a checkpoint. If you fall behind at any point, checkout the corresponding branch to catch up.

| Branch | What's included |
|--------|-----------------|
| `main` | This README only |
| `part-1-setup` | Starter repo — clone this at the start of the workshop |
| `part-2-routing` | Expenses route + hardcoded expense list page |
| `part-3-database` | Prisma + Neon wired up, real data fetching |
| `part-4-crud` | Add & delete expenses via Server Actions |
| `part-5-deployed` | Final complete app, ready to deploy |

To checkout a branch:

```bash
git checkout part-1-setup
```

---

## Tech stack

- **[Next.js](https://nextjs.org/)** — React framework with file-based routing and Server Actions
- **[Prisma](https://www.prisma.io/)** — TypeScript ORM for type-safe database queries
- **[Neon](https://neon.tech/)** — Serverless PostgreSQL database
- **[Vercel](https://vercel.com/)** — Deployment platform (one-click deploy from GitHub)

---

## Starting a Next.js project from scratch

> We've already done this for you in the workshop repo, but here's how you'd do it yourself for your own Orbital project.

**Prerequisites:** Node.js 18+ installed ([download here](https://nodejs.org/))
# Next.js Workshop — Part 5: Deployment

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

```
✔ Would you like to use TypeScript? → Yes
✔ Would you like to use ESLint? → Yes
✔ Would you like to use Tailwind CSS? → Yes
✔ Would you like your code inside a `src/` directory? → No
✔ Would you like to use App Router? → Yes
✔ Would you like to use Turbopack for `next dev`? → No
✔ Would you like to customize the import alias? → No
```

Then:

```bash
cd my-app
npm run dev
```

Your app is now running at `http://localhost:3000`.

---

## Getting started (workshop)

```bash
# 1. Clone the repo and checkout the starter branch
git clone https://github.com/YOUR_REPO_URL
cd orbital-workshop
git checkout part-1-setup

# 2. Install dependencies
npm install

# 3. Set up your environment variables - This can be done later
cp .env.example .env
# Then open .env and add your Neon connection string

# 4. Run migrations
npx prisma migrate dev

# 5. Start the dev server
npm run dev
```

Open `http://localhost:3000` — you should see the app running.

---

## Setting up Prisma + Neon for your own project

### 1. Create a Neon database

1. Sign up at [neon.tech](https://neon.tech/)
2. Create a new project
3. Copy the **connection string** — it looks like: `postgresql://user:password@host/dbname?sslmode=require`

### 2. Install Prisma

```bash
npm install prisma @prisma/client
npx prisma init
```

This creates a `prisma/schema.prisma` file and a `.env` file.

### 3. Add your connection string

In your `.env` file:

```
DATABASE_URL="your-neon-connection-string-here"
```

### 4. Define your schema

Edit `prisma/schema.prisma`:

```prisma
model Expense {
  id        String   @id @default(cuid())
  title     String
  amount    Float
  date      DateTime @default(now())
  createdAt DateTime @default(now())
}
```

### 5. Run migrations

```bash
npx prisma migrate dev --name init
```

Your table is now live in Neon.

---

## Project structure
=======
### Why

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
    page.tsx              # home page (/ route)
    expenses/
      page.tsx            # expense list (/expenses route)
      actions.ts          # server actions for create/delete
  components/
    ExpenseCard.tsx        # expense card UI component
    ExpenseForm.tsx        # add expense form
  lib/
    db.ts                  # prisma client singleton
  prisma/
    schema.prisma          # database schema
  .env.example             # copy this to .env and fill in your DB URL
  .gitignore
  README.md
```


## Resources

- [Next.js docs](https://nextjs.org/docs)
- [Prisma docs](https://www.prisma.io/docs)
- [Neon docs](https://neon.tech/docs)
- [Vercel deployment guide](https://vercel.com/docs/deployments/overview)
=======
>>>>>>> part-5-deployment
