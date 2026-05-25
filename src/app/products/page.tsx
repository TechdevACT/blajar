import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowRight } from "lucide-react";
import fs from 'fs';
import path from 'path';

export default function ProductsPage() {
  const filePath = path.join(process.cwd(), 'src/data/products.json');
  const products = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  // map category/tags properly if needed.
  const getTag = (cat: string) => {
    if (cat === 'bundle') return 'Hemat';
    if (cat === 'live-shopping') return 'Best Seller';
    return 'Populer';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />

      <section className="relative overflow-hidden bg-radial-accent grid-noise px-6 py-24 text-center">
        <div className="relative max-w-2xl mx-auto">
          <p className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Produk
          </p>
          <h1 className="font-display text-[clamp(2.2rem,6vw,4rem)] leading-[1.1] mb-4">
            Semua panduan{" "}
            <em className="not-italic text-gradient-accent">siap pakai.</em>
          </h1>
          <p className="text-muted-foreground text-lg">
            Pilih panduan sesuai kebutuhan toko Anda — PDF dikirim otomatis setelah bayar.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 border-t border-border flex-1">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p: any) => (
            <Link
              key={p.slug}
              href={`/${p.slug}`}
              className="relative overflow-hidden bg-card border border-border rounded-2xl p-7 flex flex-col hover:-translate-y-1 hover:border-accent transition-all group"
            >
              <div
                className="absolute -top-16 -right-16 w-40 h-40 rounded-full blur-3xl opacity-30"
                style={{ background: p.accent_color }}
              />
              <span
                className="text-[10px] font-bold uppercase tracking-widest mb-3 self-start px-2.5 py-1 rounded-md"
                style={{ background: `${p.accent_color}22`, color: p.accent_color }}
              >
                {getTag(p.category)}
              </span>
              <h3 className="font-display text-xl mb-3 leading-tight group-hover:text-white transition-colors">{p.name}</h3>
              <p className="text-sm text-muted-foreground mb-6 flex-1">{p.subheadline}</p>
              <div className="flex items-end justify-between gap-3 mb-4">
                <div>
                  <p className="text-xs text-muted-foreground line-through">Rp {p.price_original.toLocaleString('id-ID')}</p>
                  <p className="font-display text-2xl font-black" style={{ color: p.accent_color }}>
                    Rp {p.price.toLocaleString('id-ID')}
                  </p>
                </div>
                <div
                  className="inline-flex items-center gap-1 text-sm font-bold px-4 py-2 rounded-lg border border-border group-hover:border-accent transition"
                  style={{ color: p.accent_color }}
                >
                  Lihat <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground text-sm mb-4">
            Ada pertanyaan tentang produk?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-border bg-card px-6 py-3 rounded-xl font-bold hover:border-accent transition"
          >
            Hubungi kami →
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
