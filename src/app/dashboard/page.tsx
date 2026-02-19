import DashboardShell from "@/components/DashboardShell";
import DashboardIframe from "@/components/DashboardIframe";

export default function DashboardPage() {
  const iframeSrc = process.env.NEXT_PUBLIC_DASHBOARD_IFRAME_SRC;

  return (
    <DashboardShell>
      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold text-gray-50">대시보드</h2>
        {iframeSrc ? (
          <DashboardIframe src={iframeSrc} title="Looker Studio Dashboard" />
        ) : (
          <div className="rounded-2xl border border-amber-500/20 bg-amber-500/10 px-4 py-3 text-sm text-amber-100">
            환경변수 <span className="font-mono">NEXT_PUBLIC_DASHBOARD_IFRAME_SRC</span>가
            설정되어 있지 않아 iframe을 표시할 수 없습니다.
          </div>
        )}
      </section>
    </DashboardShell>
  );
}

