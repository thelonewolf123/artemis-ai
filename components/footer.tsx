import { Github, Mail, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/30 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-lg bg-linear-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white text-xs font-bold">A</span>
              </div>
              <span className="font-bold">Artemis</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your AI personal assistant on Telegram.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Product</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#features"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  How It Works
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Connect</h4>
            <div className="flex items-center gap-3 mb-4">
              <a
                href="https://github.com/thelonewolf123"
                className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                title="GitHub"
                target="_blank"
              >
                <Github size={18} />
              </a>
              <a
                href="https://x.com/harishkumar_pro"
                className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                title="Twitter"
                target="_blank"
              >
                <Twitter size={18} />
              </a>
              <a
                href="mailto:harishkumar.vellore@gmail.com"
                className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                title="Email"
                target="_blank"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            Built with ❤️ by{" "}
            <a
              href="https://harishkumar.info"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline transition-colors font-medium"
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
