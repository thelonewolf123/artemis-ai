import { MessageSquare, Sparkles, Zap, Brain } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Start Chatting",
    description:
      "Add @ArtemisPaBot to Telegram and start a conversation. No setup needed—just begin."
  },
  {
    icon: Brain,
    title: "Teach & Customize",
    description:
      "Create custom instructions and notes. Train Artemis to understand your unique workflow and preferences."
  },
  {
    icon: Sparkles,
    title: "Let It Learn",
    description:
      "Artemis adapts to your patterns, remembers what matters, and becomes smarter with every interaction."
  },
  {
    icon: Zap,
    title: "Get Things Done",
    description:
      "Schedule one-time, daily, or weekly reminders that can update tasks, send summaries, or trigger custom workflows via the new RabbitMQ delayed queue."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance tracking-tight">
            How Artemis Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four simple steps to transform how you organize your life
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -z-10" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="relative group">
                <div className="flex flex-col h-full items-center text-center md:items-start md:text-left">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 rounded-3xl bg-background flex items-center justify-center relative z-10 border border-border/50 group-hover:border-primary/50 transition-colors duration-300">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="text-primary" size={32} />
                      </div>
                    </div>
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-lg shadow-primary/20 z-20">
                      {idx + 1}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
