import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Database, Activity, Utensils, BrainCircuit, Check, Zap, Calendar, ArrowRight } from "lucide-react"

const skills = [
  {
    id: "diet",
    icon: Utensils,
    label: "Diet Tracking",
    color: "bg-green-500",
    textColor: "text-green-500",
    position: { x: -140, y: -100 },
    schema: ["calories", "protein", "meal_type"]
  },
  {
    id: "exercise",
    icon: Activity,
    label: "Exercise",
    color: "bg-blue-500",
    textColor: "text-blue-500",
    position: { x: 140, y: -100 },
    schema: ["type", "duration", "intensity"]
  },
  {
    id: "tasks",
    icon: Check,
    label: "Tasks",
    color: "bg-purple-500",
    textColor: "text-purple-500",
    position: { x: -140, y: 100 },
    schema: ["title", "due_date", "priority"]
  },
  {
    id: "calendar",
    icon: Calendar,
    label: "Calendar",
    color: "bg-orange-500",
    textColor: "text-orange-500",
    position: { x: 140, y: 100 },
    schema: ["event", "time", "location"]
  }
]

export default function SkillMatrixAnimated() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null)
  const [step, setStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 5)
    }, 6000) // 6 seconds per step for better readability
    return () => clearInterval(interval)
  }, [])

  // Scenario Steps:
  // 0: Idle / Reset (Brief)
  // 1: Highlight Diet & Calendar (Context)
  // 2: Send Data to Core (Flow)
  // 3: Core Processing (Thinking)
  // 4: Send Command to Exercise (Recommendation)

  const getStatusText = () => {
    switch (step) {
      case 1: return "Analyzing Context: Diet & Schedule..."
      case 2: return "Syncing Data to Core..."
      case 3: return "Processing Logic..."
      case 4: return "Generating Recommendation..."
      default: return "Monitoring Skills..."
    }
  }

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center">
      {/* Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.2)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
          </linearGradient>
        </defs>
        {skills.map((skill) => {
          // Keep source lines active during flow and processing
          const isSource = (step >= 1 && step <= 3 && (skill.id === 'diet' || skill.id === 'calendar'))
          const isTarget = (step === 4 && skill.id === 'exercise')
          
          return (
            <g key={skill.id}>
              <line
                x1="50%"
                y1="50%"
                x2={`calc(50% + ${skill.position.x}px)`}
                y2={`calc(50% + ${skill.position.y}px)`}
                stroke="url(#lineGradient)"
                strokeWidth={isSource || isTarget ? 2 : 1}
                className="transition-all duration-1000 ease-in-out"
                strokeOpacity={isSource || isTarget ? 0.8 : 0.2}
              />
              
              {/* Data Packet: Source -> Core */}
              {isSource && step === 2 && (
                <motion.circle
                  r="6"
                  fill={skill.id === 'diet' ? '#22c55e' : '#f97316'}
                  filter={`drop-shadow(0 0 8px ${skill.id === 'diet' ? '#22c55e' : '#f97316'})`}
                  initial={{ cx: `calc(50% + ${skill.position.x}px)`, cy: `calc(50% + ${skill.position.y}px)` }}
                  animate={{ cx: "50%", cy: "50%" }}
                  transition={{ duration: 2, ease: "easeInOut" }} // Slower travel time
                />
              )}

              {/* Data Packet: Core -> Target */}
              {isTarget && step === 4 && (
                <motion.circle
                  r="6"
                  fill="#3b82f6"
                  filter="drop-shadow(0 0 8px #3b82f6)"
                  initial={{ cx: "50%", cy: "50%" }}
                  animate={{ cx: `calc(50% + ${skill.position.x}px)`, cy: `calc(50% + ${skill.position.y}px)` }}
                  transition={{ duration: 2, ease: "easeInOut" }} // Slower travel time
                />
              )}
            </g>
          )
        })}
      </svg>

      {/* Central Core Node */}
      <div className="relative z-10">
        <motion.div
          animate={{ 
            scale: step === 3 ? [1, 1.1, 1] : [1, 1.02, 1],
            boxShadow: step === 3 
              ? "0 0 60px rgba(168, 85, 247, 0.4)" 
              : "0 0 30px rgba(255,255,255,0.05)"
          }}
          transition={{ duration: step === 3 ? 2 : 4, repeat: Infinity, ease: "easeInOut" }} // Slower pulse
          className="w-24 h-24 rounded-full bg-black border border-white/10 flex items-center justify-center relative transition-colors duration-1000 z-20"
          style={{ borderColor: step === 3 ? 'rgba(168, 85, 247, 0.5)' : 'rgba(255,255,255,0.1)' }}
        >
          <div className={`absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl transition-opacity duration-1000 ${step === 3 ? 'opacity-100' : 'opacity-30'}`} />
          <BrainCircuit size={40} className={`text-white relative z-10 transition-colors duration-1000 ${step === 3 ? 'text-purple-400' : ''}`} />
        </motion.div>
        
        {/* Pulse Rings */}
        <AnimatePresence>
          {step === 3 && (
            <>
              <motion.div
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 0.5, scale: 1.5 }}
                exit={{ opacity: 0, scale: 2 }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                className="absolute inset-0 rounded-full border border-purple-500/30"
              />
              <motion.div
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 0.3, scale: 2 }}
                exit={{ opacity: 0, scale: 2.5 }}
                transition={{ duration: 2, delay: 0.5, repeat: Infinity, ease: "easeOut" }}
                className="absolute inset-0 rounded-full border border-purple-500/20"
              />
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Skill Nodes */}
      {skills.map((skill) => {
        const isActive = activeSkill === skill.id
        // Keep highlighted longer: Diet/Calendar from step 1-3, Exercise at step 4
        const isHighlighted = (step >= 1 && step <= 3 && (skill.id === 'diet' || skill.id === 'calendar')) || (step === 4 && skill.id === 'exercise')
        const Icon = skill.icon

        return (
          <motion.div
            key={skill.id}
            className={`absolute cursor-pointer ${isActive || isHighlighted ? 'z-50' : 'z-20'}`}
            style={{ x: skill.position.x, y: skill.position.y }}
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{ 
              x: skill.position.x, 
              y: skill.position.y, 
              opacity: 1,
              scale: isActive || isHighlighted ? 1.1 : 1
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            onHoverStart={() => setActiveSkill(skill.id)}
            onHoverEnd={() => setActiveSkill(null)}
          >
            <div className={`relative flex items-center justify-center w-16 h-16 rounded-2xl bg-[#0a0a0a] border border-white/10 transition-all duration-700 ${isHighlighted ? `border-${skill.color.split('-')[1]}-500/50 shadow-[0_0_20px_rgba(0,0,0,0.5)]` : ''} ${isActive ? 'border-white/30 bg-[#151515]' : ''}`}>
              <div className={`absolute inset-0 rounded-2xl opacity-20 ${skill.color} blur-lg transition-opacity duration-700 ${isActive || isHighlighted ? 'opacity-60' : ''}`} />
              <Icon className={`${skill.textColor}`} size={28} />
              
              {/* Tooltip / Schema View */}
              <AnimatePresence mode="wait">
                {(isActive || (step >= 1 && step <= 3 && (skill.id === 'diet' || skill.id === 'calendar'))) && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 5, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="absolute top-full mt-4 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl p-4 w-48 shadow-2xl pointer-events-none"
                  >
                    <div className={`text-sm font-bold mb-2 ${skill.textColor}`}>{skill.label}</div>
                    {skill.id === 'diet' && step >= 1 && step <= 3 ? (
                      <div className="text-xs text-white font-medium">Detected: Heavy Lunch (1200kcal)</div>
                    ) : skill.id === 'calendar' && step >= 1 && step <= 3 ? (
                      <div className="text-xs text-white font-medium">Status: Free after 5 PM</div>
                    ) : (
                      <div className="space-y-1 z-100">
                        {skill.schema.map((field, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                            <div className={`w-1 h-1 rounded-full ${skill.color}`} />
                            <span className="font-mono">{field}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Suggestion Popup */}
              <AnimatePresence>
                {skill.id === 'exercise' && step === 4 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -5, scale: 0.95 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="absolute bottom-full mb-4 bg-blue-500/10 backdrop-blur-xl border border-blue-500/30 rounded-xl p-4 w-56 shadow-2xl z-50 pointer-events-none"
                  >
                    <div className="flex items-center gap-2 mb-2">
                       <Zap size={14} className="text-blue-400" />
                       <span className="text-xs font-bold text-blue-400">Recommendation</span>
                    </div>
                    <div className="text-sm text-white font-medium">
                      Suggest: 30min Cardio
                    </div>
                    <div className="text-xs text-blue-200/70 mt-1">
                      Reason: High calorie intake + Free time
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )
      })}

      {/* Status Text */}
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm text-muted-foreground font-mono"
        >
          {getStatusText()}
        </motion.div>
      </div>
    </div>
  )
}
