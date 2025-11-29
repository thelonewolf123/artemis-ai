import { CheckCircle2, FileText, Brain, Zap, Clock, Phone, Globe, Search, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export default function FeaturesBento() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
      {/* 1. Internet Access (Large Card) */}
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="md:col-span-2 row-span-2 relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 p-8 flex flex-col justify-between group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] group-hover:bg-blue-500/30 transition-colors duration-500" />
        
        <div className="relative z-10">
          <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4 text-blue-400">
            <Globe size={24} />
          </div>
          <h3 className="text-3xl font-bold mb-2">Internet Access</h3>
          <p className="text-muted-foreground text-lg max-w-md">
            Powered by <span className="text-white font-semibold">Perplexity</span>. Artemis can browse the web in real-time to find answers, summarize articles, and fact-check information.
          </p>
        </div>

        <div className="relative z-10 mt-8 bg-black/40 backdrop-blur-md rounded-xl p-4 border border-white/5">
          <div className="flex items-center gap-3 mb-3 text-sm text-muted-foreground">
            <Search size={14} />
            <span>Searching the web for "latest AI trends"...</span>
          </div>
          <div className="space-y-2">
            <div className="h-2 w-3/4 bg-white/10 rounded-full animate-pulse" />
            <div className="h-2 w-1/2 bg-white/10 rounded-full animate-pulse delay-75" />
          </div>
        </div>
      </motion.div>

      {/* 2. Task Management */}
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 p-6 group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10">
          <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center mb-4 text-green-400">
            <CheckCircle2 size={20} />
          </div>
          <h3 className="text-xl font-bold mb-2">Task Management</h3>
          <p className="text-sm text-muted-foreground">
            Create, update, and organize tasks with natural language.
          </p>
        </div>
      </motion.div>

      {/* 3. Smart Notes */}
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 p-6 group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10">
          <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center mb-4 text-yellow-400">
            <FileText size={20} />
          </div>
          <h3 className="text-xl font-bold mb-2">Smart Notes</h3>
          <p className="text-sm text-muted-foreground">
            Your assistant evolves with your preferences and custom instructions.
          </p>
        </div>
      </motion.div>

      {/* 4. RAG & Memory (Wide) */}
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="md:col-span-2 relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 p-6 flex items-center justify-between group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10 max-w-sm">
          <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4 text-purple-400">
            <Brain size={20} />
          </div>
          <h3 className="text-xl font-bold mb-2">RAG & Long-term Memory</h3>
          <p className="text-sm text-muted-foreground">
            Upload documents and ask questions. Smart memory stores only what matters for your future context.
          </p>
        </div>
        <div className="hidden sm:block relative z-10 mr-8">
           <Brain size={64} className="text-purple-500/20" />
        </div>
      </motion.div>

      {/* 5. Voice Support */}
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 p-6 group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10">
          <div className="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center mb-4 text-pink-400">
            <Phone size={20} />
          </div>
          <h3 className="text-xl font-bold mb-2">Voice Support</h3>
          <p className="text-sm text-muted-foreground">
            Send voice messages and get voice responses on the go.
          </p>
        </div>
      </motion.div>

      {/* 6. Daily Summary */}
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 p-6 group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10">
          <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center mb-4 text-orange-400">
            <Clock size={20} />
          </div>
          <h3 className="text-xl font-bold mb-2">Daily Briefing</h3>
          <p className="text-sm text-muted-foreground">
            Get a comprehensive summary every morning at 6am.
          </p>
        </div>
      </motion.div>

      {/* 7. Actionable Reminders */}
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="md:col-span-2 relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 p-6 group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10">
          <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-4 text-cyan-400">
            <Zap size={20} />
          </div>
          <h3 className="text-xl font-bold mb-2">Actionable Reminders</h3>
          <p className="text-sm text-muted-foreground">
            Create reminders that trigger workflows. Powered by RabbitMQ delayed queues.
          </p>
        </div>
      </motion.div>
    </div>
  )
}
