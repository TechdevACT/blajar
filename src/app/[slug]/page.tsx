import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { CheckCircle2, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), 'src/data/products.json');
  const products = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  return products.map((p: any) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'src/data/products.json');
  const products = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  const product = products.find((p: any) => p.slug === slug);
  if (!product) return {};
  return { title: `${product.name} — blajar.com` };
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'src/data/products.json');
  const products = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  const p = products.find((p: any) => p.slug === slug);

  if (!p) {
    notFound();
  }

  // Inject dynamic CSS variables to root div
  const pageStyle = {
    '--accent': p.accent_color,
    '--accent-2': p.accent_color,
  } as React.CSSProperties;

  return (
    <div style={pageStyle} className="min-h-screen flex flex-col pb-24">
      {/* TOP BANNER */}
      <div className="bg-accent text-accent-foreground text-center py-2.5 px-4 text-xs font-bold tracking-wide z-50 relative">
        ⚡ Harga spesial: <span className="bg-black/15 px-2 py-0.5 rounded mx-1 text-sm">Rp {p.price.toLocaleString('id-ID')}</span> — PDF siap download setelah bayar
      </div>

      <SiteNav />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-radial-accent grid-noise min-h-[85vh] flex items-center justify-center px-6 py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 bg-accent text-accent-foreground text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
            ✨ Pilihan Tepat
          </span>
          <p className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            {p.subheadline}
          </p>
          <h1 className="font-display text-[clamp(2.4rem,6vw,4.5rem)] leading-[1.05] font-black mb-6">
            {p.headline.includes(':') ? (
              <>
                {p.headline.split(':')[0]}: <br />
                <em className="not-italic text-gradient-accent">{p.headline.split(':')[1]}</em>
              </>
            ) : (
              <em className="not-italic text-gradient-accent">{p.headline}</em>
            )}
          </h1>
          
          <div className="flex items-center justify-center gap-4 mb-10">
            {p.price_original > 0 && (
              <span className="text-xl text-muted-foreground line-through">Rp {p.price_original.toLocaleString('id-ID')}</span>
            )}
            <span className="text-5xl md:text-6xl font-black font-display text-accent">Rp {p.price.toLocaleString('id-ID')}</span>
          </div>

          <div className="flex flex-wrap gap-3 justify-center mb-10">
            <a
              href="#buy"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold px-8 py-5 rounded-xl glow-accent hover:-translate-y-0.5 hover:glow-accent-lg transition-all text-lg"
            >
              Dapatkan Panduan Ini <ArrowRight size={18} />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-16 pt-8 border-t border-border/50">
            {p.stats.map((s: any, i: number) => (
              <div key={i} className="text-center">
                <div className="font-display text-3xl font-black text-foreground">{s.number}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="px-6 py-24 border-t border-border bg-bg-dark">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3 text-center">Masalah Umum</p>
          <h2 className="font-display text-3xl md:text-5xl text-center mb-16">Apakah ini yang Anda rasakan?</h2>
          
          <div className="grid md:grid-cols-2 gap-5">
            {p.pain_points.map((pt: string, i: number) => (
              <div key={i} className="bg-card border border-border rounded-2xl p-6 flex items-start gap-4 hover:border-destructive/50 transition">
                <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center text-destructive shrink-0 font-bold">
                  ✕
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed pt-1">{pt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODULES (Isi Panduan) */}
      <section className="px-6 py-24 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3 text-center">Isi Panduan</p>
          <h2 className="font-display text-3xl md:text-5xl text-center mb-16">Apa yang akan Anda pelajari?</h2>
          
          <div className="space-y-4">
            {p.modules.map((m: any, i: number) => (
              <div key={i} className="bg-card/40 border border-border rounded-2xl p-6 flex flex-col md:flex-row gap-4 items-start md:items-center hover:border-accent transition group">
                <div className="bg-accent/10 text-accent font-bold px-4 py-2 rounded-lg text-sm shrink-0 group-hover:bg-accent group-hover:text-accent-foreground transition">
                  {m.tag}
                </div>
                <p className="text-foreground">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-6 py-24 border-t border-border bg-bg-dark">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3 text-center">Testimoni</p>
          <h2 className="font-display text-3xl md:text-5xl text-center mb-16">Kata mereka yang sudah praktik</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {p.testimonials.map((t: any, i: number) => (
              <div key={i} className="bg-card border border-border rounded-2xl p-7 flex flex-col hover:border-accent/40 transition">
                <div className="text-accent tracking-widest text-lg mb-4">{t.stars}</div>
                <p className="text-sm text-foreground/90 leading-relaxed flex-1 mb-6 italic">
                  {t.text}
                </p>
                <p className="font-display font-bold text-sm text-muted-foreground">{t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING & CHECKOUT */}
      <section id="buy" className="px-6 py-24 border-t border-border relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 max-w-2xl mx-auto bg-card border-2 border-accent rounded-3xl p-8 md:p-12 text-center shadow-2xl shadow-accent/10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-4">Investasi Bisnis Anda</p>
          <h2 className="font-display text-3xl md:text-4xl font-black mb-2">{p.name}</h2>
          <p className="text-muted-foreground mb-8">PDF siap download setelah pembayaran berhasil.</p>
          
          <div className="mb-8">
            <span className="text-lg text-muted-foreground line-through block mb-2">Rp {p.price_original.toLocaleString('id-ID')}</span>
            <span className="text-6xl font-black font-display text-accent">Rp {p.price.toLocaleString('id-ID')}</span>
          </div>

          <a href={p.mayar_url} className="block w-full bg-accent text-accent-foreground font-bold py-5 rounded-xl glow-accent hover:-translate-y-0.5 hover:glow-accent-lg transition-all text-lg mb-6">
            Beli Sekarang — Instan Download
          </a>

          <div className="flex flex-col gap-3 text-sm text-left max-w-sm mx-auto text-muted-foreground">
            <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-accent" /> Format PDF, bisa dibaca di HP/Laptop</div>
            <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-accent" /> Sekali bayar, akses seumur hidup</div>
            <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-accent" /> Update gratis jika ada revisi panduan</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {p.faq && p.faq.length > 0 && (
        <section className="px-6 py-24 bg-bg-dark border-t border-border">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3 text-center">FAQ</p>
            <h2 className="font-display text-4xl md:text-5xl text-center mb-12">Pertanyaan umum</h2>

            <Accordion type="single" collapsible className="w-full">
              {p.faq.map((item: any, i: number) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
                  <AccordionTrigger className="text-left text-sm md:text-base font-semibold py-5 hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      {/* BOTTOM STICKY BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-t border-border py-4 px-6 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        <div className="flex items-center justify-between gap-4 max-w-6xl mx-auto">
          <div className="flex-1 truncate hidden sm:block">
            <p className="text-xs text-muted-foreground truncate">{p.name}</p>
            <p className="font-display font-black text-accent text-xl mt-0.5">Rp {p.price.toLocaleString('id-ID')}</p>
          </div>
          <div className="sm:hidden flex-1">
            <p className="font-display font-black text-accent text-xl">Rp {p.price.toLocaleString('id-ID')}</p>
          </div>
          <a href={p.mayar_url} className="bg-accent text-accent-foreground px-6 py-3 rounded-xl font-bold text-sm whitespace-nowrap hover:opacity-90 transition glow-accent">
            Beli Sekarang →
          </a>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
