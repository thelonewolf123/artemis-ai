import { Github, Mail, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20 backdrop-blur-md py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center border border-white/10">
                <span className="text-white text-sm font-bold">A</span>
              </div>
              <span className="font-bold text-lg tracking-tight">Artemis</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your AI personal assistant on Telegram. <br />
              Intelligent, structured, and always learning.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-sm tracking-wider uppercase text-muted-foreground">Product</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#features"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  How It Works
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-sm tracking-wider uppercase text-muted-foreground">Connect</h4>
            <div className="flex items-center gap-3 mb-4">
              <a
                href="https://github.com/thelonewolf123"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-primary transition-all duration-300 border border-white/5"
                title="GitHub"
                target="_blank"
              >
                <Github size={18} />
              </a>
              <a
                href="https://x.com/harishkumar_pro"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-primary transition-all duration-300 border border-white/5"
                title="Twitter"
                target="_blank"
              >
                <Twitter size={18} />
              </a>
              <a
                href="mailto:harishkumar.vellore@gmail.com"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-primary transition-all duration-300 border border-white/5"
                title="Email"
                target="_blank"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            Built with ❤️ by{" "}
            <a
              href="https://harishkumar.info"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors font-medium"
            >
              Harish Kumar K
            </a>
          </p>
          <p className="text-xs text-muted-foreground">
            © 2025 Artemis. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
