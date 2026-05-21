// No "use client" directive = this is a SERVER component (the default).
//
// Use server components when you need:
//   - Database queries or file system access
//   - Sensitive data (API keys stay on the server)
//   - Heavy dependencies you don't want to ship to the browser
//
// Server components run ONLY on the server — they are never sent to
// the browser as JavaScript. This keeps your bundle smaller and faster.
//
// They can be async, which lets you await data directly in the component.

async function getGreeting(): Promise<string> {
  // Simulating a server-side data fetch (e.g. from a DB or external API).
  // In a real app this might be: const user = await db.users.findFirst(...)
  await new Promise((resolve) => setTimeout(resolve, 50)); // fake latency
  return "Welcome to Orbital Workshop!";
}

export default async function ServerGreeting() {
  // `await` works here because this is a server component.
  // You CANNOT do this in a client component — hooks like useEffect
  // would be needed instead, and secrets would be exposed to the browser.
  const greeting = await getGreeting();

  return (
    <div style={styles.box}>
      <p style={styles.label}>⚙️ Server Component</p>
      <p style={styles.text}>{greeting}</p>
      <p style={styles.note}>
        This text was fetched on the server. No JavaScript was sent to the
        browser for this component.
      </p>
    </div>
  );
}

const styles = {
  box: {
    padding: "20px",
    borderRadius: "12px",
    border: "1px solid #d1fae5",
    backgroundColor: "#f0fdf4",
    marginBottom: "16px",
  },
  label: {
    margin: "0 0 8px",
    fontSize: "12px",
    fontWeight: 700,
    textTransform: "uppercase" as const,
    letterSpacing: "0.05em",
    color: "#16a34a",
  },
  text: {
    margin: "0 0 8px",
    fontSize: "18px",
    fontWeight: 600,
    color: "#111827",
  },
  note: {
    margin: 0,
    fontSize: "13px",
    color: "#6b7280",
  },
} satisfies Record<string, React.CSSProperties>;
