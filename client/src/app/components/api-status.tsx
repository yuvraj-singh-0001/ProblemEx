"use client";

import { useEffect, useState } from "react";

type ApiHealth = {
  status: string;
  database: string;
};

const apiUrl =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000/api";

export default function ApiStatus() {
  const [health, setHealth] = useState<ApiHealth | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function checkApi() {
      try {
        const response = await fetch(`${apiUrl}/health`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`API returned HTTP ${response.status}`);
        }

        const result: ApiHealth = await response.json();
        setHealth(result);
      } catch (reason) {
        if (controller.signal.aborted) {
          return;
        }

        setError(
          reason instanceof Error ? reason.message : "Could not reach the API",
        );
      }
    }

    void checkApi();
    return () => controller.abort();
  }, []);

  return (
    <section
      aria-live="polite"
      className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <h2 className="text-lg font-semibold text-slate-950">API connection</h2>
      {health ? (
        <p className="mt-2 text-sm text-emerald-700">
          API {health.status} · MongoDB {health.database}
        </p>
      ) : error ? (
        <p className="mt-2 text-sm text-rose-700">
          API unavailable: {error}. Start the server and MongoDB to connect.
        </p>
      ) : (
        <p className="mt-2 text-sm text-slate-500">Checking API connection…</p>
      )}
    </section>
  );
}
