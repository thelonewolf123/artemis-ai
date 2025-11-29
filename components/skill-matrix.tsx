import { Database, Layers, Activity, Utensils, BrainCircuit, ArrowRight } from "lucide-react"

export default function SkillMatrix() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 text-sm font-medium border border-primary/20">
            <BrainCircuit size={16} />
            <span>New Architecture</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Introducing Skill Matrix
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A revolutionary system that lets Artemis create new skills, each with their own mini-database and structured data model.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-10">
            <div className="flex gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 group-hover:bg-primary/20 transition-colors duration-300">
                <Database className="text-primary" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Structured Data Models</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Each skill has its own fields and schema. No more overloaded memory blobs. 
                  Store structured entries that the AI can query and reason about with precision.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center shrink-0 border border-secondary/20 group-hover:bg-secondary/20 transition-colors duration-300">
                <Layers className="text-secondary-foreground" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Composable Skills</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Skills can integrate with each other. Your Exercise Skill can use data from your 
                  Diet Tracking Skill to dynamically plan workouts based on your energy levels.
                </p>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
              <div className="grid gap-6">
                <div className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors duration-300">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-green-500/10 rounded-xl">
                      <Utensils className="text-green-500" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold text-lg">Diet Tracking</div>
                      <div className="text-sm text-muted-foreground">Structured Meal Logs</div>
                    </div>
                  </div>
                  <div className="h-3 w-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="text-muted-foreground/50 rotate-90 animate-bounce" />
                </div>

                <div className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors duration-300">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-500/10 rounded-xl">
                      <Activity className="text-blue-500" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold text-lg">Exercise Planner</div>
                      <div className="text-sm text-muted-foreground">Dynamic Workouts</div>
                    </div>
                  </div>
                  <div className="h-3 w-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="text-base text-muted-foreground text-center italic">
                  "Based on your light lunch, let's focus on cardio today."
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
