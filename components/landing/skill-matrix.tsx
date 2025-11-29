import { Database, Layers, BrainCircuit } from "lucide-react"
import SkillMatrixAnimated from "@/components/landing/skill-matrix-animated"

export default function SkillMatrix() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 text-sm font-medium border border-primary/20">
                <BrainCircuit size={16} />
                <span>New Architecture</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                Introducing Skill Matrix
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                A revolutionary system that lets Artemis create new skills, each with their own mini-database and structured data model.
              </p>
            </div>

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
          </div>

          <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl opacity-20" />
             <SkillMatrixAnimated />
          </div>
        </div>
      </div>
    </section>
  )
}
