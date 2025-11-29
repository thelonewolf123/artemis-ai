import { CheckCircle2, FileText, Brain, Zap, Clock, Phone } from "lucide-react";

const features = [
  {
    icon: CheckCircle2,
    title: "Task Management",
    description:
      "Plan your day with intelligent task management. Create, update, and organize tasks with natural language."
  },
  {
    icon: FileText,
    title: "Smart Notes",
    description:
      "Custom instructions guide how Artemis responds. Your assistant evolves with your preferences."
  },
  {
    icon: Brain,
    title: "RAG & Memory",
    description:
      "Upload documents and ask questions. Smart memory stores only what matters for your future."
  },
  {
    icon: Phone,
    title: "Voice Support",
    description:
      "Send voice messages and get voice responses. Perfect for on-the-go conversations."
  },
  {
    icon: Clock,
    title: "Daily Summary",
    description:
      "Get a comprehensive briefing every morning at 6am with tasks, emails*, and calendar events*."
  },
  {
    icon: Zap,
    title: "Actionable Reminders",
    description:
      "Create one-time, daily, or weekly reminders that can run any Artemis tool. The new RabbitMQ delayed queue fires workflows exactly when needed."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need in one intelligent assistant
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5">
                    <Icon className="text-primary" size={28} />
                  </div>

                  <h3 className="text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 p-6 bg-primary/5 border border-primary/10 rounded-2xl backdrop-blur-sm">
          <p className="text-sm text-center text-muted-foreground font-medium">
            * Email and Calendar features coming soon in public beta
          </p>
        </div>
      </div>
    </section>
  );
}
