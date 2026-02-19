import DashboardShell from "@/components/DashboardShell";

export default function DashboardPage() {
  return (
    <DashboardShell>
      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold text-gray-50">대시보드</h2>
        <p className="text-sm text-gray-300">
          아래 영역에 나중에 <span className="text-gray-100">Looker Studio iframe</span>을
          삽입할 수 있도록 플레이스홀더를 준비해뒀어요.
        </p>

        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.55)] backdrop-blur">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_30%_0%,rgba(16,185,129,0.10),transparent_55%),radial-gradient(700px_circle_at_80%_30%,rgba(99,102,241,0.16),transparent_55%)]" />

          <div className="relative">
            <div className="flex items-center justify-between gap-3">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-100">
                  Looker Studio 임베드 영역
                </span>
                <span className="text-xs text-gray-400">
                  이 박스를 iframe으로 교체하면 됩니다.
                </span>
              </div>
              <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-gray-300">
                Placeholder
              </span>
            </div>

            <div className="mt-4 grid place-items-center rounded-xl border border-dashed border-white/15 bg-black/25 p-10">
              <div className="flex max-w-md flex-col items-center gap-2 text-center">
                <div className="h-10 w-10 rounded-2xl bg-indigo-500/15 ring-1 ring-indigo-400/20" />
                <p className="text-sm font-medium text-gray-100">
                  여기에 Looker Studio iframe을 넣으세요
                </p>
                <p className="text-xs leading-relaxed text-gray-400">
                  예: <span className="font-mono">{"<iframe ... />"}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DashboardShell>
  );
}

