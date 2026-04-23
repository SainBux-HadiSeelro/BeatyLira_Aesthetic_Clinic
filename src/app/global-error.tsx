"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body className="min-h-screen bg-ivory flex flex-col items-center justify-center text-center px-6 font-sans">
        <p style={{ fontSize: "0.75rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#C49A7A", marginBottom: "1rem" }}>
          Something went wrong
        </p>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "3rem", color: "#1C1008", marginBottom: "1.5rem" }}>
          An Unexpected Error Occurred
        </h1>
        <p style={{ color: "#6B5B4E", marginBottom: "2.5rem" }}>
          We apologise for the inconvenience. Please try again or return home.
        </p>
        <div style={{ display: "flex", gap: "1rem" }}>
          <button
            onClick={reset}
            style={{ padding: "1rem 2rem", background: "#1C1008", color: "#F9F4EF", fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer", border: "none" }}
          >
            Try Again
          </button>
          <Link
            href="/"
            style={{ padding: "1rem 2rem", border: "1px solid #1C1008", color: "#1C1008", fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase" }}
          >
            Return Home
          </Link>
        </div>
      </body>
    </html>
  );
}
