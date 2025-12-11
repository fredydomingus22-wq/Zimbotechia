import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zimbotechia",
  description: "Plataforma de agentes de IA autónoma"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-slate-900">
        <main className="min-h-screen flex items-center justify-center p-6">
          {children}
        </main>
      </body>
    </html>
  );
}
