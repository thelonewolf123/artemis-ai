import FeaturesBento from "@/components/landing/features-bento"

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need in one intelligent assistant
          </p>
        </div>

        <FeaturesBento />

        <div className="mt-16 p-6 bg-primary/5 border border-primary/10 rounded-2xl backdrop-blur-sm max-w-3xl mx-auto">
          <p className="text-sm text-center text-muted-foreground font-medium">
            * Email and Calendar features coming soon in public beta
          </p>
        </div>
      </div>
    </section>
  );
}
