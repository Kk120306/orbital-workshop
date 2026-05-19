# Next.js Workshop — Part 2: Routing & Components

> **Orbital 2026** · Developer Student Club NUS
> Branch: `part-2-routing`

---

## What we cover in Part 2

- **File-based routing** — how Next.js turns folders into URL routes
- **`layout.tsx`** — the root layout that wraps every page
- **Server components** — run on the server, can `await` data, send zero JS to the browser
- **Client components** — run in the browser, needed for `useState`, `useEffect`, event handlers
- **Composing them together** — a server component can render a client component as a child

---

## Getting started

### 1. Clone the repo & switch to this branch

```bash
git checkout part-2-routing
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Folder structure

```
orbital-nextjs-workshop/
  app/
    layout.tsx            # root layout — wraps every page (great for nav/footer)
    page.tsx              # home page → route: /
    about/
      page.tsx            # about page → route: /about
    expenses/
      page.tsx            # expense list → route: /expenses (hardcoded for now)
  components/
    ExpenseCard.tsx       # pre-built card UI for displaying an expense
    sample/
      ServerGreeting.tsx  # server component demo — async, no JS sent to browser
      LikeButton.tsx      # client component demo — uses useState, runs in browser
  lib/
    db.ts                 # Prisma client singleton (used in Part 3)
  prisma/
    schema.prisma         # database schema — defines the Expense model
  .env.example            # template for your environment variables
  README.md               # you're reading it!
```

---

## Key concepts

### Routing

Every `page.tsx` inside `app/` becomes a route. The folder path maps directly to the URL:

| File | Route |
|------|-------|
| `app/page.tsx` | `/` |
| `app/about/page.tsx` | `/about` |
| `app/expenses/page.tsx` | `/expenses` |

`layout.tsx` wraps all child pages automatically — no imports needed.

### Server vs Client components

**Server components** (the default — no directive needed):
- Run only on the server
- Can be `async` and `await` data (DB queries, fetch calls)
- Secrets (API keys, DB URLs) stay on the server
- Zero JavaScript is sent to the browser for this component

**Client components** (`"use client"` at the top of the file):
- Run in the browser
- Required for `useState`, `useEffect`, `onClick`, and other interactivity
- Bundled and shipped to the browser as JavaScript
- Cannot directly access server-only resources

The recommended pattern: server components fetch and pass data down; client components handle interactivity.

---

## Questions?

Reach out to us on Telegram:
- Kai — @kai120306
- Shermaine — @soheepyying
