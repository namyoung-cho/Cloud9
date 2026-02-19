import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Protected Dashboard",
  description: "Password-gated dashboard placeholder"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="min-h-dvh bg-[#0b0f17] text-gray-100 antialiased">
        {children}
      </body>
    </html>
  );
}

