import { MessageCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden min-h-[90vh] flex items-center justify-center">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] animate-pulse delay-1000" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out fill-mode-backwards">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 text-primary px-4 py-2 rounded-full mb-8 text-sm font-medium shadow-lg shadow-primary/5 hover:bg-white/10 transition-colors cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="flex items-center gap-1">
              Public Beta Available <Sparkles size={12} />
            </span>
          </div>
        </div>

        <div className="relative mb-8">
          <h1 className="text-6xl md:text-8xl font-bold leading-tight text-balance tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150 ease-out fill-mode-backwards bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70 drop-shadow-sm">
            Your AI Personal Assistant on <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Telegram</span>
          </h1>
        </div>

        <div className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/5 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-backwards max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl text-muted-foreground text-balance leading-relaxed">
            Artemis grows with your needs. Task management, intelligent notes, document analysis, and memory that matters.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 ease-out fill-mode-backwards">
          <a href="https://t.me/ArtemisPaBot" target="_blank" rel="noopener noreferrer" className="inline-flex w-full sm:w-auto group">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2 h-14 px-8 text-lg w-full sm:w-auto shadow-xl shadow-primary/25 transition-all duration-300 hover:scale-105 hover:shadow-primary/40 rounded-2xl">
              <MessageCircle size={24} className="group-hover:rotate-12 transition-transform duration-300" />
              Try Now on Telegram
            </Button>
          </a>
        </div>

        <div className="mt-12 inline-flex items-center gap-2 text-sm text-muted-foreground animate-in fade-in duration-1000 delay-700 fill-mode-backwards bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/5">
          <span className="text-primary font-bold">✓</span>
          <span>First 100 messages free for everyone</span>
        </div>
      </div>
    </section>
  )
}
