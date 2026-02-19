import DashboardShell from "@/components/DashboardShell";
import Image from "next/image";
// import DashboardIframe from "@/components/DashboardIframe";

export default function DashboardPage() {
  // 나중에 Looker Studio iframe 주소가 준비되면 아래를 다시 사용하세요.
  // const iframeSrc = process.env.NEXT_PUBLIC_DASHBOARD_IFRAME_SRC;

  return (
    <DashboardShell>
      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold text-gray-50">대시보드</h2>

        {/* 현재는 iframe 대신 프리뷰 이미지만 표시합니다. */}
        <div className="relative h-[calc(100svh-220px)] min-h-[560px] overflow-hidden rounded-2xl border border-white/10 bg-black/30 shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
          <Image
            src="/dashboard-preview.png"
            alt="대시보드 미리보기"
            fill
            sizes="100vw"
            priority
            className="object-contain"
          />
        </div>

        {/*
        {iframeSrc ? (
          <DashboardIframe src={iframeSrc} title="Looker Studio Dashboard" />
        ) : null}
        */}
      </section>
    </DashboardShell>
  );
}

