import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, MoreVertical, Mic, Send, Paperclip, Smile } from "lucide-react"

export default function HeroMobileDemo() {
  const [messages, setMessages] = useState<Array<{ id: number; type: 'user' | 'bot'; content: string | React.ReactNode; isVoice?: boolean }>>([])
  const [isTyping, setIsTyping] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [showVoiceRecording, setShowVoiceRecording] = useState(false)

  useEffect(() => {
    const sequence = async () => {
      // Delay start
      await new Promise(r => setTimeout(r, 1000))

      // 1. User types "Help me plan my day"
      const text = "Help me plan my day"
      for (let i = 0; i <= text.length; i++) {
        setInputValue(text.slice(0, i))
        await new Promise(r => setTimeout(r, 50))
      }
      await new Promise(r => setTimeout(r, 300))
      setInputValue("")
      setMessages(prev => [...prev, { id: 1, type: 'user', content: text }])

      // 2. Bot types
      await new Promise(r => setTimeout(r, 500))
      setIsTyping(true)
      await new Promise(r => setTimeout(r, 1500))
      setIsTyping(false)
      setMessages(prev => [...prev, { 
        id: 2, 
        type: 'bot', 
        content: "Good morning! ☀️\n\nHere's your schedule:\n• 09:00 AM - Team Sync\n• 11:30 AM - Review Designs\n• 02:00 PM - Deep Work\n\nShould I add a gym session?" 
      }])

      // 3. User records voice
      await new Promise(r => setTimeout(r, 1000))
      setShowVoiceRecording(true)
      await new Promise(r => setTimeout(r, 2000))
      setShowVoiceRecording(false)
      setMessages(prev => [...prev, { 
        id: 3, 
        type: 'user', 
        content: "Voice Message (0:04)", 
        isVoice: true 
      }])

      // 4. Bot processes and replies
      await new Promise(r => setTimeout(r, 600))
      setIsTyping(true)
      await new Promise(r => setTimeout(r, 1200))
      setIsTyping(false)
      setMessages(prev => [...prev, { 
        id: 4, 
        type: 'bot', 
        content: "Done! 🏋️‍♂️\nAdded 'Gym Session' at 6:00 PM.\n\nI've also set a reminder for your protein shake." 
      }])
    }

    sequence()
  }, [])

  return (
    <div className="relative mx-auto w-[300px] h-[600px] bg-black rounded-[3rem] border-[8px] border-gray-900 shadow-2xl overflow-hidden">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-20" />
      
      {/* Status Bar */}
      <div className="absolute top-2 left-6 right-6 flex justify-between text-white text-[10px] font-medium z-10">
        <span>9:41</span>
        <div className="flex gap-1">
          <span>5G</span>
          <span>100%</span>
        </div>
      </div>

      {/* Telegram Header */}
      <div className="absolute top-0 left-0 right-0 bg-[#212121] pt-8 pb-3 px-4 flex items-center gap-3 z-10 border-b border-white/5">
        <ArrowLeft className="text-white" size={20} />
        <div className="flex-1 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">
            A
          </div>
          <div>
            <div className="text-white text-sm font-semibold">Artemis AI</div>
            <div className="text-[#aaaaaa] text-xs">bot</div>
          </div>
        </div>
        <MoreVertical className="text-white" size={20} />
      </div>

      {/* Chat Area */}
      <div className="absolute inset-0 bg-[#0f0f0f] pt-24 pb-16 px-3 overflow-y-auto scrollbar-hide">
        <div className="space-y-3">
          <AnimatePresence>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                    msg.type === 'user'
                      ? 'bg-[#8774e1] text-white rounded-tr-sm'
                      : 'bg-[#212121] text-white rounded-tl-sm'
                  }`}
                >
                  {msg.isVoice ? (
                    <div className="flex items-center gap-2 min-w-[120px]">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                        <div className="w-0 h-0 border-l-[6px] border-l-white border-y-[4px] border-y-transparent ml-0.5" />
                      </div>
                      <div className="flex-1 h-4 flex items-center gap-0.5">
                        {[...Array(12)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{ height: [4, 12, 4] }}
                            transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                            className="w-0.5 bg-white/50 rounded-full"
                          />
                        ))}
                      </div>
                      <span className="text-xs opacity-70">0:04</span>
                    </div>
                  ) : (
                    <div className="whitespace-pre-wrap">{msg.content}</div>
                  )}
                  <div className={`text-[10px] mt-1 text-right ${msg.type === 'user' ? 'text-white/70' : 'text-[#aaaaaa]'}`}>
                    9:42 AM
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {isTyping && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex justify-start"
            >
              <div className="bg-[#212121] rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1">
                <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 0.5, repeat: Infinity }} className="w-1.5 h-1.5 bg-[#aaaaaa] rounded-full" />
                <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 0.5, repeat: Infinity, delay: 0.1 }} className="w-1.5 h-1.5 bg-[#aaaaaa] rounded-full" />
                <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 0.5, repeat: Infinity, delay: 0.2 }} className="w-1.5 h-1.5 bg-[#aaaaaa] rounded-full" />
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Voice Recording Overlay */}
      <AnimatePresence>
        {showVoiceRecording && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="absolute bottom-0 left-0 right-0 h-32 bg-[#212121] z-30 rounded-t-2xl flex flex-col items-center justify-center gap-4"
          >
            <div className="text-[#aaaaaa] text-sm">Recording...</div>
            <div className="flex items-center gap-1 h-8">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ height: [8, 24, 8] }}
                  transition={{ duration: 0.5, repeat: Infinity, delay: Math.random() * 0.5 }}
                  className="w-1 bg-[#8774e1] rounded-full"
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Input Area */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#212121] p-3 flex items-center gap-2 z-20">
        <Paperclip className="text-[#aaaaaa]" size={20} />
        <div className="flex-1 bg-[#0f0f0f] rounded-2xl h-9 flex items-center px-3 gap-2">
          <input 
            type="text" 
            value={inputValue}
            readOnly
            placeholder="Message"
            className="bg-transparent text-white text-sm w-full focus:outline-none placeholder-[#aaaaaa]"
          />
          <Smile className="text-[#aaaaaa]" size={18} />
        </div>
        {inputValue ? (
          <div className="w-9 h-9 rounded-full bg-[#8774e1] flex items-center justify-center">
            <Send className="text-white" size={18} />
          </div>
        ) : (
          <div className="w-9 h-9 rounded-full bg-[#212121] flex items-center justify-center">
            <Mic className="text-[#aaaaaa]" size={20} />
          </div>
        )}
      </div>
    </div>
  )
}
