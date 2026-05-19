# Next.js Workshop — Part 3: Database

> **Orbital 2026** · Developer Student Club NUS
> Branch: `part-3-database`

---

## What we cover in Part 3

- Setting up a **PostgreSQL** database on [Neon](https://neon.tech)
- Defining a schema with **Prisma**
- Running migrations with `prisma migrate dev`
- Seeding the database with sample data
- Replacing hardcoded data with real **Prisma queries**

---

## Getting started (follow along in the workshop)

### 1. Clone the repo

```bash
git checkout part-3-database
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

Then open `.env` and fill in your Neon database URL:

```
DATABASE_URL="your-neon-connection-string-here"
```

You can get this from your [Neon dashboard](https://console.neon.tech) → your project → **Connection string**.

### 4. Run migrations

Apply the database schema:

```bash
npx prisma migrate dev
```

### 5. Seed the database

Insert the sample expenses:

```bash
npx prisma db seed
```

### 6. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000/expenses](http://localhost:3000/expenses) — you should see the three expenses pulled from your database.

---

## Folder structure

```
orbital-nextjs-workshop/
  app/
    page.tsx              # home page → route: /
    expenses/
      page.tsx            # expense list → route: /expenses (now reads from DB)
  components/
    ExpenseCard.tsx       # card UI for displaying an expense
  lib/
    db.ts                 # Prisma client singleton
  prisma/
    schema.prisma         # database schema — defines the Expense model
    seed.ts               # seed script — inserts sample expenses
  prisma.config.ts        # Prisma config (migrations path, seed command, DB URL)
  .env.example            # template for your environment variables
  .gitignore              # includes .env so secrets don't get committed
  README.md               # you're reading it!
```

## Questions?

Reach out to us on Telegram:
- Kai — @kai120306
- Shermaine — @soheepyying
