"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/" as const, label: "Beranda" },
  { to: "/about" as const, label: "Tentang" },
  { to: "/products" as const, label: "Produk" },
  { to: "/contact" as const, label: "Kontak" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-2xl font-black tracking-tight">
          blajar<span className="text-accent">.</span>com
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                href={l.to}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="hidden md:inline-flex bg-accent text-accent-foreground px-5 py-2.5 rounded-lg font-bold text-sm hover:opacity-90 transition"
        >
          Mulai →
        </Link>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden absolute top-full left-0 w-full border-b border-border bg-background shadow-2xl">
          <ul className="flex flex-col p-4 gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  href={l.to}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2.5 rounded-md text-sm text-muted-foreground hover:bg-card hover:text-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
