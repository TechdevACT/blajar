"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, MapPin, MessageCircle, CheckCircle2, Send } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

const schema = z.object({
  name: z.string().trim().min(2, "Nama minimal 2 karakter").max(80, "Nama terlalu panjang"),
  email: z.string().trim().email("Format email tidak valid").max(120),
  topic: z.string().min(1, "Pilih topik"),
  message: z
    .string()
    .trim()
    .min(10, "Pesan minimal 10 karakter")
    .max(1000, "Pesan maksimal 1000 karakter"),
});

type FormData = z.infer<typeof schema>;

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", topic: "", message: "" },
  });

  const onSubmit = async (data: FormData) => {
    // Hook this to your backend later. For now: simulate success.
    await new Promise((r) => setTimeout(r, 600));
    console.log("Contact submission:", data);
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />

      <section className="relative overflow-hidden bg-radial-accent grid-noise px-6 pt-24 pb-16 text-center">
        <div className="relative max-w-2xl mx-auto">
          <p className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Hubungi kami
          </p>
          <h1 className="font-display text-[clamp(2.2rem,6vw,4rem)] leading-[1.1] mb-4">
            Ada pertanyaan?{" "}
            <em className="not-italic text-gradient-accent">Tulis di sini.</em>
          </h1>
          <p className="text-muted-foreground text-lg">
            Kami balas dalam 1×24 jam pada hari kerja.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 border-t border-border flex-1">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-card border border-border rounded-2xl p-8 space-y-5"
              noValidate
            >
              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Nama lengkap" error={errors.name?.message}>
                  <input
                    {...register("name")}
                    type="text"
                    placeholder="Budi Santoso"
                    className="input-base"
                  />
                </Field>
                <Field label="Email" error={errors.email?.message}>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="budi@toko.com"
                    className="input-base"
                  />
                </Field>
              </div>

              <Field label="Topik" error={errors.topic?.message}>
                <select {...register("topic")} className="input-base">
                  <option value="">— Pilih topik —</option>
                  <option value="produk">Pertanyaan tentang panduan</option>
                  <option value="pembayaran">Pembayaran & pengiriman</option>
                  <option value="kerjasama">Kerja sama / partnership</option>
                  <option value="lainnya">Lainnya</option>
                </select>
              </Field>

              <Field label="Pesan" error={errors.message?.message}>
                <textarea
                  {...register("message")}
                  rows={6}
                  placeholder="Ceritakan apa yang bisa kami bantu…"
                  className="input-base resize-none"
                />
              </Field>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-bold py-4 rounded-xl glow-accent hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:translate-y-0"
              >
                {isSubmitting ? "Mengirim…" : (
                  <>Kirim pesan <Send size={18} /></>
                )}
              </button>

              {sent && (
                <div className="flex items-center gap-2 text-sm text-accent bg-accent/10 border border-accent/40 rounded-lg px-4 py-3">
                  <CheckCircle2 size={18} />
                  Pesan terkirim. Kami balas segera ke email Anda.
                </div>
              )}
            </form>

            <style>{`
              .input-base {
                width: 100%;
                background: var(--bg-dark);
                border: 1px solid var(--border);
                border-radius: 0.75rem;
                padding: 0.85rem 1rem;
                color: var(--foreground);
                font-family: inherit;
                font-size: 0.95rem;
                transition: border-color 0.2s, box-shadow 0.2s;
              }
              .input-base::placeholder { color: var(--muted-foreground); }
              .input-base:focus {
                outline: none;
                border-color: var(--accent);
                box-shadow: 0 0 0 3px color-mix(in oklab, var(--accent) 20%, transparent);
              }
              select.input-base { appearance: none; cursor: pointer; }
            `}</style>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-2 space-y-4">
            <InfoCard
              icon={<Mail size={20} />}
              title="Email"
              value="halo@blajar.com"
              href="mailto:halo@blajar.com"
            />
            <InfoCard
              icon={<MessageCircle size={20} />}
              title="WhatsApp"
              value="+62 812-0000-0000"
              href="https://wa.me/6281200000000"
            />
            <InfoCard
              icon={<MapPin size={20} />}
              title="Kantor"
              value="Jakarta, Indonesia"
            />

            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              <iframe
                title="Lokasi kantor blajar.com"
                src="https://www.openstreetmap.org/export/embed.html?bbox=106.7589%2C-6.2615%2C106.8589%2C-6.1615&layer=mapnik&marker=-6.2115%2C106.8089"
                className="w-full h-72 grayscale-[0.3] contrast-110"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="p-4 text-xs text-muted-foreground flex items-center justify-between">
                <span>📍 Jakarta, Indonesia</span>
                <a
                  href="https://www.openstreetmap.org/?mlat=-6.2115&mlon=106.8089#map=12/-6.2115/106.8089"
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent hover:underline"
                >
                  Buka peta →
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold mb-2 block">{label}</span>
      {children}
      {error && <span className="text-xs text-destructive mt-1.5 block">{error}</span>}
    </label>
  );
}

function InfoCard({
  icon,
  title,
  value,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <>
      <div className="w-10 h-10 rounded-lg bg-accent/15 text-accent flex items-center justify-center">
        {icon}
      </div>
      <div>
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-0.5">
          {title}
        </p>
        <p className="font-semibold">{value}</p>
      </div>
    </>
  );
  const cls =
    "flex items-center gap-4 bg-card border border-border rounded-2xl p-5 transition hover:border-accent";
  return href ? (
    <a href={href} className={cls}>
      {inner}
    </a>
  ) : (
    <div className={cls}>{inner}</div>
  );
}
