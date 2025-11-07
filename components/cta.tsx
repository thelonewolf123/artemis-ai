import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-2xl border border-border/50 overflow-hidden">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />

          <div className="relative z-10 p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8 text-balance">
              Join the public beta and get your first 100 messages free. No credit card required.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://t.me/ArtemisPaBot" target="_blank" rel="noopener noreferrer" className="inline-flex">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2">
                  <MessageCircle size={20} />
                  Start Chatting Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
