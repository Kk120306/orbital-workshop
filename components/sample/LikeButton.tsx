"use client";

// "use client" marks this as a CLIENT component.
//
// Use client components when you need:
//   - Interactivity (onClick, onChange, etc.)
//   - Browser APIs (window, localStorage, etc.)
//   - React hooks (useState, useEffect, etc.)
//
// Client components are sent to the browser and run there.
// Avoid putting secrets (API keys, DB queries) inside them.

import { useState } from "react";

export default function LikeButton() {
  // `useState` only works in client components.
  // If you try to use it in a server component, Next.js will throw an error.
  const [likes, setLikes] = useState(0);

  return (
    <button
      onClick={() => setLikes((prev) => prev + 1)}
      style={styles.button}
    >
      ❤️ Like ({likes})
    </button>
  );
}

const styles = {
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #e5e7eb",
    backgroundColor: "#fff",
    cursor: "pointer",
  },
} satisfies Record<string, React.CSSProperties>;
