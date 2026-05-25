
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Target, Heart, Sparkles, Rocket, Award, Users } from "lucide-react";

const milestones = [
  { year: "2023", title: "Ide pertama", desc: "Dimulai dari obrolan ringan dengan pemilik toko di pasar yang bingung mau mulai jualan online dari mana." },
  { year: "2024", title: "Panduan pertama rilis", desc: "Panduan TikTok Live Shopping diluncurkan. Dalam 2 bulan, sudah dibaca ratusan pemilik toko." },
  { year: "2025", title: "Seri Transisi Generasi", desc: "Memperluas fokus ke bisnis keluarga: bagaimana Gen 1 mewariskan dan Gen 2 mengambil alih." },
  { year: "2026", title: "Komunitas tumbuh", desc: "Ribuan pemilik toko menggunakan panduan kami sebagai pegangan harian transformasi digital mereka." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />

      {/* HERO */}
      <section className="relative overflow-hidden bg-radial-accent grid-noise px-6 py-32 text-center">
        <div className="relative max-w-3xl mx-auto">
          <p className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Tentang kami
          </p>
          <h1 className="font-display text-[clamp(2.2rem,6vw,4.2rem)] leading-[1.1] mb-6">
            Kami percaya ilmu digital{" "}
            <em className="not-italic text-gradient-accent">milik semua orang.</em>
          </h1>
          <p className="text-muted-foreground text-lg">
            blajar.com lahir dari satu keyakinan sederhana: pemilik toko tradisional
            tidak butuh teori — mereka butuh panduan yang langsung bisa dipraktikkan.
          </p>
        </div>
      </section>

      {/* BENTO GRID — VISION */}
      <section className="px-6 py-24 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3 text-center">
            Visi & misi
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-center mb-16">
            Apa yang kami perjuangkan.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-6 auto-rows-[180px] gap-4">
            {/* Big card */}
            <div className="md:col-span-4 md:row-span-2 relative overflow-hidden bg-gradient-to-br from-accent/15 via-card to-card border border-accent/40 rounded-2xl p-8 flex flex-col justify-end">
              <Target className="absolute top-8 right-8 text-accent opacity-30" size={120} />
              <Target className="text-accent mb-4" size={32} />
              <h3 className="font-display text-3xl mb-3">Visi</h3>
              <p className="text-muted-foreground max-w-md">
                Menjadi rujukan #1 panduan digital praktis untuk UMKM Indonesia —
                ditulis dengan bahasa manusia, untuk orang yang sibuk berdagang.
              </p>
            </div>

            <div className="md:col-span-2 bg-card border border-border rounded-2xl p-6 hover:border-accent transition">
              <Heart className="text-accent mb-3" size={24} />
              <h3 className="font-display text-lg mb-2">Empati dulu</h3>
              <p className="text-sm text-muted-foreground">
                Kami dengar dulu, baru menulis.
              </p>
            </div>

            <div className="md:col-span-2 bg-card border border-border rounded-2xl p-6 hover:border-accent transition">
              <Rocket className="text-accent mb-3" size={24} />
              <h3 className="font-display text-lg mb-2">Praktik &gt; teori</h3>
              <p className="text-sm text-muted-foreground">
                Setiap bab punya checklist actionable.
              </p>
            </div>

            <div className="md:col-span-3 bg-card border border-border rounded-2xl p-6 hover:border-accent transition">
              <Sparkles className="text-accent mb-3" size={24} />
              <h3 className="font-display text-lg mb-2">Bahasa Indonesia tulen</h3>
              <p className="text-sm text-muted-foreground">
                Bukan terjemahan kursus luar. Konteks lokal, contoh lokal.
              </p>
            </div>

            <div className="md:col-span-3 bg-card border border-border rounded-2xl p-6 hover:border-accent transition">
              <Users className="text-accent mb-3" size={24} />
              <h3 className="font-display text-lg mb-2">Untuk yang sibuk</h3>
              <p className="text-sm text-muted-foreground">
                Padat, ringkas, langsung ke poin. Tidak ada filler.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="px-6 py-24 bg-bg-dark border-t border-border">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3 text-center">
            Perjalanan
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-center mb-16">
            Dari satu obrolan ke ribuan pembaca.
          </h2>

          <ol className="relative border-l-2 border-border ml-3 space-y-12">
            {milestones.map((m, i) => (
              <li key={m.year} className="pl-8 group">
                <span className="absolute -left-[13px] w-6 h-6 rounded-full bg-background border-2 border-accent flex items-center justify-center group-hover:bg-accent transition-colors">
                  <Award size={12} className="text-accent group-hover:text-accent-foreground" />
                </span>
                <p className="font-display text-3xl font-black text-accent mb-1">
                  {m.year}
                </p>
                <h3 className="font-display text-xl mb-2">{m.title}</h3>
                <p className="text-muted-foreground">{m.desc}</p>
                {i === milestones.length - 1 && (
                  <span className="inline-block mt-3 text-xs font-bold uppercase tracking-widest text-accent">
                    Hari ini
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
