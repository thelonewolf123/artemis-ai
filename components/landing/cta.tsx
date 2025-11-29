import { MessageCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-[2.5rem] border border-white/10 overflow-hidden group">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20 opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />

          <div className="relative z-10 p-12 md:p-20 text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 text-balance max-w-2xl mx-auto">
              Join the public beta and experience the future of personal AI. 
              <span className="block mt-2 text-primary font-medium">First 100 messages free. No credit card required.</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="https://t.me/ArtemisPaBot" target="_blank" rel="noopener noreferrer" className="inline-flex w-full sm:w-auto">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white gap-3 h-14 px-8 text-lg w-full sm:w-auto shadow-xl shadow-primary/25 transition-all duration-300 hover:scale-105 hover:shadow-primary/40 rounded-2xl">
                  <MessageCircle size={24} />
                  Start Chatting Now
                  <ArrowRight size={18} className="opacity-50" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
