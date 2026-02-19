"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Props = {
  src: string;
  title?: string;
};

export default function DashboardIframe({ src, title = "Dashboard" }: Props) {
  const [loaded, setLoaded] = useState(false);
  const [hidePreview, setHidePreview] = useState(false);

  const previewVisible = useMemo(() => !hidePreview, [hidePreview]);

  useEffect(() => {
    if (!loaded) return;
    const t = window.setTimeout(() => setHidePreview(true), 700);
    return () => window.clearTimeout(t);
  }, [loaded]);

  return (
    <div className="relative h-[calc(100svh-220px)] min-h-[560px] overflow-hidden rounded-2xl border border-white/10 bg-black/30 shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
      <iframe
        src={src}
        title={title}
        className="absolute inset-0 h-full w-full"
        onLoad={() => setLoaded(true)}
        loading="eager"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />

      {previewVisible ? (
        <div
          className={[
            "fixed inset-0 z-50 transition-opacity duration-700 ease-out",
            loaded ? "opacity-0 pointer-events-none" : "opacity-100"
          ].join(" ")}
          aria-hidden={loaded}
        >
          <div className="absolute inset-0 relative">
            <Image
              src="/dashboard-preview.png"
              alt=""
              fill
              sizes="100vw"
              priority
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/65" />

          <div className="relative grid h-full place-items-center px-6">
            <div className="flex max-w-xl flex-col items-center gap-3 text-center">
              <div className="h-10 w-10 animate-pulse rounded-2xl bg-white/10 ring-1 ring-white/15 backdrop-blur" />
              <p className="text-sm font-semibold tracking-tight text-gray-50 sm:text-base">
                데이터를 안전하게 불러오는 중입니다...
              </p>
              <p className="text-xs leading-relaxed text-gray-300">
                로딩이 완료되면 대시보드가 자동으로 표시됩니다.
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

