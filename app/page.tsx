// app/page.tsx — the home page ("/").
//
// This is itself a SERVER component. It composes both a server component
// and a client component together. This is the recommended pattern in
// Next.js App Router: server components handle data, client components
// handle interactivity.

import ServerGreeting from "@/components/sample/ServerGreeting";
import LikeButton from "@/components/sample/LikeButton";

export default function Home() {
  return (
    <main style={styles.main}>
      <h1 style={styles.heading}>Server vs Client Components</h1>

      {/* SERVER COMPONENT
          - Runs only on the server
          - Can be async / await data
          - No interactivity (no hooks, no event handlers)
          - Zero JS sent to the browser for this component */}
      <ServerGreeting />

      {/* CLIENT COMPONENT
          - Runs in the browser
          - Can use useState, useEffect, onClick, etc.
          - JS is bundled and sent to the browser
          - Cannot directly access server-only resources */}
      <div style={styles.clientBox}>
        <p style={styles.label}>🖥️ Client Component</p>
        <p style={styles.note}>
          This button uses <code>useState</code> — that's only possible in a
          client component.
        </p>
        <LikeButton />
      </div>
    </main>
  );
}

const styles = {
  main: {
    padding: "40px",
    maxWidth: "600px",
    margin: "0 auto",
    fontFamily: "sans-serif",
  },
  heading: {
    fontSize: "24px",
    fontWeight: 700,
    marginBottom: "24px",
    color: "#111827",
  },
  clientBox: {
    padding: "20px",
    borderRadius: "12px",
    border: "1px solid #dbeafe",
    backgroundColor: "#eff6ff",
  },
  label: {
    margin: "0 0 8px",
    fontSize: "12px",
    fontWeight: 700,
    textTransform: "uppercase" as const,
    letterSpacing: "0.05em",
    color: "#2563eb",
  },
  note: {
    margin: "0 0 16px",
    fontSize: "13px",
    color: "#6b7280",
  },
} satisfies Record<string, React.CSSProperties>;
