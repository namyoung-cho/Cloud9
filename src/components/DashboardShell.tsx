"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DashboardShell({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  async function logout() {
    setPending(true);
    try {
      await fetch("/api/logout", { method: "POST" });
    } finally {
      router.push("/");
      router.refresh();
      setPending(false);
    }
  }

  return (
    <main className="min-h-dvh px-4 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
        <header className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_24px_rgba(16,185,129,0.7)]" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-base font-semibold text-gray-50">Dashboard</h1>
              <p className="text-xs text-gray-400">Password gated (demo)</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="hidden rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm text-gray-200 transition hover:bg-black/30 sm:inline-flex"
            >
              홈
            </Link>
            <button
              onClick={logout}
              disabled={pending}
              className="inline-flex items-center justify-center rounded-xl bg-white/10 px-3 py-2 text-sm font-medium text-gray-100 transition hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {pending ? "로그아웃..." : "로그아웃"}
            </button>
          </div>
        </header>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.55)] backdrop-blur">
          {children}
        </div>

        <footer className="text-xs text-gray-500">
          보안이 필요한 서비스에서는 서버 인증(사용자/세션/SSO)으로 교체하세요.
        </footer>
      </div>
    </main>
  );
}

