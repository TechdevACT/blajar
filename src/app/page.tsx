"use client";
import Link from "next/link";
import { lazy, Suspense, useEffect, useState } from "react";
import {
  ArrowRight,
  Sparkles,
  Zap,
  BookOpen,
  Users,
  Download,
  Shield,
  RefreshCw,
  Headphones,
  Star,
  Store,
  ShoppingCart,
  CreditCard,
  Rocket,
  Quote,
  CheckCircle,
} from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Hero3D = lazy(() =>
  import("@/components/Hero3D").then((m) => ({ default: m.Hero3D })),
);

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-radial-accent grid-noise min-h-[92vh] flex items-center justify-center px-6 py-24">
        {mounted && (
          <Suspense fallback={null}>
            <Hero3D />
          </Suspense>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 bg-accent text-accent-foreground text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
            <Sparkles size={14} /> Digital Innovation Studio
          </span>
          <p className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Panduan praktis untuk UMKM Indonesia
          </p>
          <h1 className="font-display text-[clamp(2.4rem,7vw,4.8rem)] leading-[1.05] font-black mb-6">
            Dari toko fisik <br />
            ke <em className="not-italic text-gradient-accent">era digital.</em>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
            Panduan PDF step-by-step yang bisa langsung dipraktikkan hari ini. Tanpa
            jargon. Tanpa teori berlebihan. Untuk pemilik toko yang sibuk.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold px-7 py-4 rounded-xl glow-accent hover:-translate-y-0.5 hover:glow-accent-lg transition-all"
            >
              Lihat semua panduan <ArrowRight size={18} />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 border border-border bg-card/40 backdrop-blur-sm text-foreground font-bold px-7 py-4 rounded-xl hover:border-accent transition"
            >
              Kenal lebih dekat
            </Link>
          </div>
          <p className="text-xs text-muted-foreground mt-6">
            ✨ Arahkan kursor ke objek 3D di atas
          </p>
        </div>
      </section>

      {/* ── SOCIAL PROOF / STATS ── */}
      <section className="px-6 py-16 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: <Download size={20} />, value: "10K+", label: "Downloads" },
              { icon: <Star size={20} />, value: "4.9/5", label: "Rating rata-rata" },
              { icon: <Users size={20} />, value: "500+", label: "UMKM terbantu" },
              { icon: <Store size={20} />, value: "50+", label: "Kota di Indonesia" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center">
                <div className="text-accent mb-2">{s.icon}</div>
                <p className="font-display text-3xl md:text-4xl font-black text-foreground">{s.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-40">
            {["Tokopedia", "Shopee", "TikTok Shop", "GoTo", "Grab"].map((logo) => (
              <span key={logo} className="font-display text-lg font-bold tracking-tight text-muted-foreground">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEY FEATURES (BENTO GRID) ── */}
      <section className="px-6 py-24 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3 text-center">
            Fitur Unggulan
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-center mb-16 max-w-2xl mx-auto">
            Semua yang Anda butuhkan, dalam satu panduan.
          </h2>

          <div className="grid md:grid-cols-3 gap-5 auto-rows-[180px]">
            {/* Large card */}
            <div className="md:col-span-2 row-span-2 bg-card border border-border rounded-2xl p-8 relative overflow-hidden group hover:border-accent transition">
              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-accent/10 blur-3xl" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-5 group-hover:scale-110 transition-transform origin-left">
                    <BookOpen size={24} />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-black mb-3">Panduan PDF Step-by-Step</h3>
                  <p className="text-muted-foreground max-w-md text-sm md:text-base leading-relaxed">
                    Setiap panduan dirancang sebagai jalan yang jelas dari nol sampai siap jualan online.
                    Tidak perlu keahlian teknis sebelumnya.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-accent text-sm font-semibold mt-4">
                  <CheckCircle size={16} /> Mulai dari nol
                </div>
              </div>
            </div>

            {/* Small card 1 */}
            <div className="bg-card border border-border rounded-2xl p-6 relative overflow-hidden group hover:border-accent transition">
              <div className="absolute -bottom-8 -right-8 w-28 h-28 rounded-full bg-accent/8 blur-2xl" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform origin-left">
                    <Download size={20} />
                  </div>
                  <h3 className="font-display text-xl font-black mb-2">Instant Download</h3>
                  <p className="text-muted-foreground text-sm">Bayar sekali, download langsung. Tidak perlu menunggu.</p>
                </div>
              </div>
            </div>

            {/* Small card 2 */}
            <div className="bg-card border border-border rounded-2xl p-6 relative overflow-hidden group hover:border-accent transition">
              <div className="absolute -bottom-8 -right-8 w-28 h-28 rounded-full bg-accent/8 blur-2xl" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform origin-left">
                    <RefreshCw size={20} />
                  </div>
                  <h3 className="font-display text-xl font-black mb-2">Update Gratis</h3>
                  <p className="text-muted-foreground text-sm">Dapatkan versi terbaru setiap kali panduan diperbarui tanpa biaya tambahan.</p>
                </div>
              </div>
            </div>

            {/* Wide card */}
            <div className="md:col-span-3 bg-card border border-border rounded-2xl p-8 relative overflow-hidden group hover:border-accent transition">
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-accent/8 blur-3xl" />
              <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:scale-110 transition-transform origin-left">
                  <Shield size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-black mb-1">Garansi 7 Hari Uang Kembali</h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    Tidak puas? Kirim email dan kami kembalikan 100% uang Anda tanpa pertanyaan ribet.
                  </p>
                </div>
                <div className="hidden md:flex items-center gap-2 text-accent font-bold text-sm shrink-0">
                  <Headphones size={18} /> Dukungan penuh
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="px-6 py-24 bg-bg-dark border-t border-border">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3 text-center">
            Cara Kerja
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-center mb-16 max-w-2xl mx-auto">
            Mulai dalam 3 langkah mudah.
          </h2>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* connecting line */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-border" />

            {[
              {
                step: "01",
                icon: <ShoppingCart size={24} />,
                title: "Pilih Panduan",
                desc: "Jelajahi katalog panduan kami dan pilih yang paling sesuai dengan kebutuhan toko Anda.",
              },
              {
                step: "02",
                icon: <CreditCard size={24} />,
                title: "Bayar & Download",
                desc: "Proses pembayaran aman dan instan. File PDF langsung tersedia di email dan dashboard Anda.",
              },
              {
                step: "03",
                icon: <Rocket size={24} />,
                title: "Praktik Langsung",
                desc: "Ikuti panduan step-by-step dan mulai tingkatkan penjualan toko Anda dari hari ini juga.",
              },
            ].map((item, i) => (
              <div key={item.step} className="relative flex flex-col items-center text-center group">
                <div className="relative z-10 w-24 h-24 rounded-2xl bg-card border border-border flex items-center justify-center text-accent mb-6 group-hover:border-accent transition">
                  {item.icon}
                </div>
                <span className="text-xs font-bold text-accent/60 tracking-widest mb-2">{item.step}</span>
                <h3 className="font-display text-xl font-black mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm max-w-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUE PROPS (existing) ── */}
      <section className="px-6 py-24 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3 text-center">
            Kenapa blajar.com
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-center mb-16 max-w-2xl mx-auto">
            Belajar digital tanpa pusing.
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Zap className="text-accent" size={28} />,
                title: "Langsung praktik",
                desc: "Setiap bab ditutup dengan checklist actionable yang bisa dijalankan hari itu juga.",
              },
              {
                icon: <BookOpen className="text-accent" size={28} />,
                title: "Bahasa Indonesia",
                desc: "Ditulis untuk pemilik toko, bukan untuk konsultan. Tanpa jargon yang ribet.",
              },
              {
                icon: <Users className="text-accent" size={28} />,
                title: "Konteks lokal",
                desc: "Strategi disesuaikan dengan realita UMKM Indonesia, bukan terjemahan kasus luar.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="bg-card border border-border rounded-2xl p-7 hover:border-accent transition group"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform origin-left">
                  {f.icon}
                </div>
                <h3 className="font-display text-xl mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT TEASER (existing) ── */}
      <section className="px-6 py-24 bg-bg-dark border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3">
            Produk
          </p>
          <h2 className="font-display text-4xl md:text-5xl mb-4">
            Panduan yang siap pakai
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-12">
            Pilih panduan sesuai kebutuhan toko Anda. PDF siap download setelah bayar.
          </p>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: "TikTok Live Shopping", price: "Rp 79.000", color: "#FE2C55" },
              { title: "Shopee Live Shopping", price: "Rp 79.000", color: "#EE4D2D" },
              { title: "Transisi Generasi", price: "Rp 149.000", color: "#B8860B" },
            ].map((p) => (
              <div
                key={p.title}
                className="relative overflow-hidden bg-card border border-border rounded-2xl p-7 text-left hover:-translate-y-1 transition-all"
                style={{ boxShadow: `0 0 0 0 ${p.color}` }}
              >
                <div
                  className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl opacity-40"
                  style={{ background: p.color }}
                />
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-3"
                  style={{ color: p.color }}
                >
                  Panduan
                </p>
                <h3 className="font-display text-2xl mb-3">{p.title}</h3>
                <p className="font-display text-3xl font-black" style={{ color: p.color }}>
                  {p.price}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 mt-12 bg-accent text-accent-foreground font-bold px-7 py-4 rounded-xl glow-accent hover:-translate-y-0.5 transition-all"
          >
            Lihat semua produk <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* ── TESTIMONIALS CAROUSEL ── */}
      <section className="px-6 py-24 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3 text-center">
            Testimoni
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-center mb-16 max-w-2xl mx-auto">
            Apa kata mereka?
          </h2>

          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {[
                {
                  name: "Dewi Sartika",
                  role: "Pemilik Toko Kain, Bandung",
                  text: "Dari nggak ngerti TikTok sampai bisa live shopping tiap malam. Panduannya benar-benar step-by-step, nggak skip langkah. Penjualan naik 40% dalam sebulan!",
                  rating: 5,
                },
                {
                  name: "Budi Hartono",
                  role: "Pemilik Warung Digital, Surabaya",
                  text: "Bahasanya sederhana dan langsung ke inti. Saya yang baru pertama kali jualan online bisa langsung praktik. Worth every rupiah.",
                  rating: 5,
                },
                {
                  name: "Siti Aminah",
                  role: "Founder, Crafty Jakarta",
                  text: "Update gratis itu nilai plus banget. Platform berubah terus, tapi panduannya selalu diperbarui. Berasa punya konsultan digital pribadi.",
                  rating: 5,
                },
                {
                  name: "Rudi Wijaya",
                  role: "Pemilik Resto, Yogyakarta",
                  text: "Sempat ragu beli panduan online, tapi garansi uang kembali bikin saya coba. Ternyata emang bermanfaat! Sekarang semua staf saya ikut belajar.",
                  rating: 5,
                },
              ].map((t, i) => (
                <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full bg-card/40 backdrop-blur-md border border-border/60 rounded-2xl p-7 flex flex-col hover:border-accent/40 transition">
                    <Quote className="text-accent/40 mb-4" size={24} />
                    <p className="text-sm text-foreground/90 leading-relaxed flex-1 mb-6">
                      "{t.text}"
                    </p>
                    <div className="flex items-center gap-1 mb-3">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} size={14} className="text-accent fill-accent" />
                      ))}
                    </div>
                    <div>
                      <p className="font-display font-bold text-sm">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-8">
              <CarouselPrevious className="static translate-x-0 translate-y-0" />
              <CarouselNext className="static translate-x-0 translate-y-0" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="px-6 py-24 bg-bg-dark border-t border-border">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3 text-center">
            FAQ
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-center mb-12">
            Pertanyaan yang sering ditanyakan.
          </h2>

          <Accordion type="single" collapsible className="w-full">
            {[
              {
                q: "Apakah panduan ini berlaku seumur hidup?",
                a: "Ya! Setelah membeli, Anda mendapatkan akses seumur hidup ke panduan tersebut termasuk semua update di masa depan tanpa biaya tambahan.",
              },
              {
                q: "Bagaimana cara mengakses file yang sudah dibeli?",
                a: "Setelah pembayaran berhasil, file PDF akan dikirim langsung ke email Anda. Anda juga bisa mengaksesnya kapan saja dari dashboard akun Anda.",
              },
              {
                q: "Apakah ada garansi uang kembali?",
                a: "Tentu. Kami memberikan garansi 7 hari uang kembali 100%. Jika Anda merasa panduan tidak sesuai, cukup kirim email dan kami akan memproses refund.",
              },
              {
                q: "Bisakah saya membagikan panduan ke tim saya?",
                a: "Setiap lisensi personal untuk satu pengguna. Untuk akses tim, silakan hubungi kami untuk penawaran lisensi bisnis khusus.",
              },
              {
                q: "Seberapa sering panduan diperbarui?",
                a: "Kami memperbarui panduan setiap kali ada perubahan signifikan di platform (seperti algoritma TikTok atau fitur baru Shopee). Pembeli lama otomatis mendapat versi terbaru.",
              },
              {
                q: "Bagaimana jika saya butuh bantuan teknis?",
                a: "Kami menyediakan dukungan email untuk semua pembeli. Respon biasanya dalam 1-2 hari kerja. Untuk pertanyaan umum, silakan cek FAQ ini terlebih dahulu.",
              },
            ].map((item, i) => (
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

      {/* ── FINAL CTA ── */}
      <section className="px-6 py-24 border-t border-border">
        <div className="max-w-5xl mx-auto relative overflow-hidden rounded-3xl bg-radial-accent border border-border p-12 md:p-16 text-center">
          <div className="absolute inset-0 grid-noise pointer-events-none" />
          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-5xl font-black mb-5">
              Siap bawa toko Anda ke <em className="not-italic text-gradient-accent">era digital?</em>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-base md:text-lg">
              Ribuan pemilik toko sudah membuktikan. Sekarang giliran Anda.
              Mulai dengan panduan yang paling sesuai untuk bisnis Anda.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold px-8 py-4 rounded-xl glow-accent hover:-translate-y-0.5 hover:glow-accent-lg transition-all"
              >
                Lihat semua panduan <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-border bg-card/40 backdrop-blur-sm text-foreground font-bold px-8 py-4 rounded-xl hover:border-accent transition"
              >
                Tanya dulu
              </Link>
            </div>
            <p className="text-xs text-muted-foreground mt-6">
              Garansi uang kembali 7 hari — tanpa risiko.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
