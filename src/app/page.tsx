import LoginCard from "@/components/LoginCard";

type PageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function Page({ searchParams }: PageProps) {
  const sp = (await searchParams) ?? {};
  const next =
    typeof sp.next === "string" && sp.next.startsWith("/") ? sp.next : "/dashboard";

  return (
    <main className="min-h-dvh px-4 py-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        <header className="flex flex-col gap-2">
          <div className="inline-flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-indigo-400 shadow-[0_0_24px_rgba(99,102,241,0.7)]" />
            <span className="text-sm text-gray-300">Protected Dashboard</span>
          </div>
          <h1 className="text-2xl font-semibold tracking-tight text-gray-50 md:text-3xl">
            비밀번호를 입력해 대시보드에 접속하세요
          </h1>
          <p className="text-sm leading-relaxed text-gray-300">
            임시 비밀번호는 <span className="font-medium text-gray-100">1234</span> 입니다.
          </p>
        </header>

        <LoginCard nextPath={next} />
      </div>
    </main>
  );
}

