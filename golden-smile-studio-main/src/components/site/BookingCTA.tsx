import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export const BookingCTA = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá Dra. Gabrielle! Meu nome é ${form.name}. Telefone: ${form.phone}. ${form.message}`;
    window.open(`https://wa.me/5561999845810?text=${encodeURIComponent(text)}`, "_blank");
    toast({ title: "Redirecionando para WhatsApp", description: "Em instantes você falará com nossa equipe." });
  };

  return (
    <section id="contato" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial-gold blur-3xl" />
        <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-primary/20 blur-3xl animate-bokeh" />
        <div className="absolute top-20 right-20 w-56 h-56 rounded-full bg-primary-glow/15 blur-3xl animate-bokeh" style={{animationDelay:"3s"}} />
      </div>

      <div className="container max-w-5xl">
        <div className="text-center reveal">
          <span className="font-accent text-primary text-xl">Vamos conversar</span>
          <h2 className="mt-2 text-4xl md:text-6xl font-display text-balance">
            Pronta para transformar seu <span className="gold-text">sorriso?</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg max-w-xl mx-auto">
            Agende sua consulta de avaliação e descubra a melhor versão do seu sorriso.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6 reveal">
          {/* WhatsApp */}
          <a
            href="https://wa.me/5561999845810"
            target="_blank" rel="noreferrer"
            className="glass-card group p-8 flex flex-col justify-between hover:-translate-y-1 hover:shadow-gold transition-all"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#25D366]/15 border border-[#25D366]/40 flex items-center justify-center text-[#25D366]">
                <MessageCircle size={26} />
              </div>
              <h3 className="mt-5 text-2xl font-display">Falar agora</h3>
              <p className="mt-2 text-muted-foreground text-sm">Resposta rápida via WhatsApp com nossa equipe.</p>
            </div>
            <span className="mt-6 inline-flex items-center gap-2 self-start bg-[#25D366] text-white font-medium px-5 py-3 rounded-full group-hover:gap-3 transition-all">
              <MessageCircle size={18} /> Abrir WhatsApp
            </span>
          </a>

          {/* Form */}
          <form onSubmit={submit} className="glass-card p-8 space-y-4">
            <h3 className="text-2xl font-display">Envie uma mensagem</h3>
            <input
              required
              placeholder="Seu nome"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-secondary border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition"
            />
            <input
              required
              placeholder="Telefone / WhatsApp"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full bg-secondary border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition"
            />
            <textarea
              rows={3}
              placeholder="Conte-nos sobre seu sorriso..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-secondary border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition resize-none"
            />
            <button type="submit" className="shimmer w-full inline-flex items-center justify-center gap-2 bg-gradient-gold text-primary-foreground font-medium px-5 py-3.5 rounded-full shadow-gold hover:shadow-gold-strong transition-all">
              <Send size={16} /> Enviar mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
