import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MetaSiteAI – Creator de Site-uri",
  description: "Transform idei în experiențe digitale de următor nivel",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <body className={inter.className}>
        <main className="mx-auto max-w-6xl px-4 sm:px-6">{children}</main>
        <footer className="mx-auto max-w-6xl px-4 sm:px-6 py-8 text-sm text-gray-500">
          © {new Date().getFullYear()} MetaSiteAI. Toate drepturile rezervate.
        </footer>
      </body>
    </html>
  );
}
