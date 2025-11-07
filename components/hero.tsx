import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 text-sm">
          <span className="w-2 h-2 rounded-full bg-primary"></span>
          Public Beta Available
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-balance">
          Your AI Personal Assistant on Telegram
        </h1>

        <p className="text-xl text-muted-foreground mb-8 text-balance leading-relaxed">
          Artemis grows with your needs. Task management, intelligent notes, document analysis, memory that matters, and
          voice support — all in your favorite messaging app.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a href="https://t.me/ArtemisPaBot" target="_blank" rel="noopener noreferrer" className="inline-flex">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2">
              <MessageCircle size={20} />
              Try Now on Telegram
            </Button>
          </a>
        </div>

        <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
          <span>✓</span>
          <span>First 100 messages free for everyone</span>
        </div>
      </div>
    </section>
  )
}
