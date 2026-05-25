import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-12 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        <p className="font-display text-2xl font-black mb-2">
          blajar<span className="text-accent">.</span>com
        </p>
        <p className="text-sm text-muted-foreground mb-4">
          Panduan digital praktis untuk UMKM Indonesia.
        </p>
        <ul className="flex flex-wrap justify-center gap-6 mb-4 text-sm text-muted-foreground">
          <li><Link href="/" className="hover:text-accent">Beranda</Link></li>
          <li><Link href="/about" className="hover:text-accent">Tentang</Link></li>
          <li><Link href="/products" className="hover:text-accent">Produk</Link></li>
          <li><Link href="/contact" className="hover:text-accent">Kontak</Link></li>
        </ul>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} blajar.com — Dibuat dengan ❤️ di Indonesia
        </p>
      </div>
    </footer>
  );
}
