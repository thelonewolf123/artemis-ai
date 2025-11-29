"use client"

import { Moon, Sun } from "lucide-react"

interface HeaderProps {
  isDark: boolean
  toggleTheme: () => void
}

export default function Header({ isDark, toggleTheme }: HeaderProps) {
  return (
    <header className="fixed top-0 w-full z-50 border-b border-white/10 backdrop-blur-xl bg-background/60 supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 bg-primary/50 rounded-lg blur-md group-hover:blur-lg transition-all duration-300" />
            <div className="relative w-full h-full rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center border border-white/20">
              <span className="text-white text-sm font-bold">A</span>
            </div>
          </div>
          <span className="font-bold text-lg tracking-tight">Artemis</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            How It Works
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </header>
  )
}
