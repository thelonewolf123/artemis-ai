import { MessageCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import HeroMobileDemo from "@/components/hero-mobile-demo"

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[128px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[128px]" 
        />
      </div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 text-primary px-4 py-2 rounded-full mb-8 text-sm font-medium shadow-lg shadow-primary/5 hover:bg-white/10 transition-colors cursor-default"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="flex items-center gap-1">
              Public Beta Available <Sparkles size={12} />
            </span>
          </motion.div>

          <div className="relative mb-8">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70 drop-shadow-sm"
            >
              Your AI Personal Assistant on <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent inline-block"
              >Telegram</motion.span>
            </motion.h1>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/5 mb-10 lg:mr-12"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Artemis grows with your needs. Task management, intelligent notes, document analysis, and memory that matters.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-6"
          >
            <a href="https://t.me/ArtemisPaBot" target="_blank" rel="noopener noreferrer" className="inline-flex w-full sm:w-auto group">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2 h-14 px-8 text-lg w-full sm:w-auto shadow-xl shadow-primary/25 transition-all duration-300 hover:scale-105 hover:shadow-primary/40 rounded-2xl">
                <MessageCircle size={24} className="group-hover:rotate-12 transition-transform duration-300" />
                Try Now on Telegram
              </Button>
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 inline-flex items-center gap-2 text-sm text-muted-foreground bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/5"
          >
            <span className="text-primary font-bold">✓</span>
            <span>First 100 messages free for everyone</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="relative z-10 hidden lg:block"
        >
          <HeroMobileDemo />
          
          {/* Decorative elements behind phone */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-full blur-3xl -z-10 animate-pulse" />
        </motion.div>
      </div>
    </section>
  )
}
