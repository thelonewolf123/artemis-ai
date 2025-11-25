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
    <section id="how-it-works" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            How Artemis Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four simple steps to transform how you organize your life
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="relative">
                <div className="flex flex-col h-full">
                  <div className="flex flex-col items-start mb-6">
                    <div className="text-6xl font-bold text-primary/75 mb-3 leading-none">
                      0{idx + 1}
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-linear-to-br from-primary to-secondary flex items-center justify-center mb-4 relative z-10 shadow-lg shadow-primary/20">
                      <Icon className="text-white" size={24} />
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm grow">
                    {step.description}
                  </p>
                </div>

                {/* Connecting line between steps */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-12 w-6 h-0.5 bg-linear-to-r from-primary/40 to-transparent" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
