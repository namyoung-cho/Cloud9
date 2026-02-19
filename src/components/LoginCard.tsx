"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginCard({ nextPath }: { nextPath: string }) {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const hint = useMemo(() => {
    if (!password) return "비밀번호를 입력하세요.";
    return "Enter로 바로 제출할 수 있어요.";
  }, [password]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setPending(true);
    setError(null);

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ password })
      });
      const data = (await res.json().catch(() => ({}))) as { message?: string };

      if (!res.ok) {
        setError(data.message ?? "로그인에 실패했습니다.");
        return;
      }

      router.push(nextPath);
      router.refresh();
    } catch {
      setError("네트워크 오류가 발생했습니다.");
    } finally {
      setPending(false);
    }
  }

  return (
    <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.55)] backdrop-blur">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_circle_at_20%_10%,rgba(99,102,241,0.18),transparent_55%),radial-gradient(700px_circle_at_80%_20%,rgba(56,189,248,0.12),transparent_55%)]" />

      <div className="relative flex flex-col gap-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-base font-semibold text-gray-50">접속 비밀번호</h2>
            <p className="text-sm text-gray-300">{hint}</p>
          </div>
          <div className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-gray-300">
            Demo
          </div>
        </div>

        <form onSubmit={onSubmit} className="flex flex-col gap-3">
          <label className="flex flex-col gap-2">
            <span className="text-xs font-medium text-gray-300">Password</span>
            <input
              autoFocus
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              inputMode="numeric"
              placeholder="예: 1234"
              className="h-11 rounded-xl border border-white/10 bg-black/30 px-4 text-sm text-gray-100 outline-none ring-0 placeholder:text-gray-500 focus:border-indigo-400/60 focus:bg-black/35 focus:shadow-[0_0_0_4px_rgba(99,102,241,0.18)]"
            />
          </label>

          {error ? (
            <div className="rounded-xl border border-rose-500/25 bg-rose-500/10 px-4 py-3 text-sm text-rose-200">
              {error}
            </div>
          ) : null}

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              disabled={pending}
              className="inline-flex h-11 items-center justify-center rounded-xl bg-indigo-500 px-4 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(99,102,241,0.35)] transition hover:bg-indigo-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {pending ? "확인 중..." : "대시보드 접속"}
            </button>

            <p className="text-xs text-gray-400">
              이 예시는 <span className="text-gray-200">데모용</span> 간단 보호(쿠키)입니다.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

