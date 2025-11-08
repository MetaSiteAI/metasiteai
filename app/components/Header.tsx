"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/portofoliu", label: "Portofoliu" },
  { href: "/servicii", label: "Servicii" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50",
        "border-b border-white/10",
        "backdrop-blur-md bg-white/60 dark:bg-neutral-900/60",
        scrolled ? "shadow-sm" : "shadow-none",
      ].join(" ")}
    >
      <div className="h-px w-full bg-gradient-to-r from-blue-500/60 via-cyan-400/60 to-blue-500/60" />

      <nav className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-gray-900 dark:text-white"
            aria-label="MetaSiteAI – Home"
          >
            MetaSiteAI
          </Link>

          {/* Desktop */}
          <ul className="hidden items-center gap-6 md:flex">
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={[
                      "relative inline-block px-1 py-1 font-medium transition-colors",
                      active
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400",
                    ].join(" ")}
                  >
                    {item.label}
                    <span
                      className={[
                        "absolute left-0 -bottom-0.5 h-0.5 w-full origin-left scale-x-0 transform rounded bg-gradient-to-r from-blue-600 to-blue-400",
                        active ? "scale-x-100" : "",
                        "transition-transform duration-300 ease-out",
                      ].join(" ")}
                    />
                  </Link>
                </li>
              );
            })}
            <li>
              <Link
                href="/contact"
                className="rounded-full border border-blue-500/30 bg-blue-600/90 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-500"
              >
                Cere ofertă
              </Link>
            </li>
          </ul>

          {/* Burger mobil */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-black/5 dark:text-gray-200 dark:hover:bg-white/5"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

        {/* Meniu mobil */}
        {open && (
          <div className="md:hidden pb-4">
            <ul className="space-y-2 rounded-lg border border-white/10 bg-white/70 p-2 backdrop-blur-md dark:border-white/10 dark:bg-neutral-900/70">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-black/5 dark:text-gray-200 dark:hover:bg-white/5"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="block rounded-md bg-blue-600 px-3 py-2 text-center text-base font-semibold text-white"
                >
                  Cere ofertă
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
