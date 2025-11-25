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
    <section id="features" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
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
                className="group relative p-6 rounded-xl border border-border/50 bg-card hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative">
                  <div className="w-12 h-12 rounded-lg bg-linear-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={24} />
                  </div>

                  <h3 className="text-lg font-semibold mb-2">
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

        <div className="mt-12 p-4 bg-primary/5 border border-primary/20 rounded-lg">
          <p className="text-sm text-center text-muted-foreground">
            * Email and Calendar features coming soon in public beta
          </p>
        </div>
      </div>
    </section>
  );
}
