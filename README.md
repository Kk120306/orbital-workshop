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
