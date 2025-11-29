"use client"

import { useState, useEffect } from "react"
import Header from "@/components/common/header"
import Hero from "@/components/landing/hero"
import SkillMatrix from "@/components/landing/skill-matrix"
import Features from "@/components/landing/features"
import HowItWorks from "@/components/landing/how-it-works"
import CTA from "@/components/landing/cta"
import Footer from "@/components/common/footer"

export default function Page() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check system preference on mount
    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches
    setIsDark(isDarkMode)
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newDarkMode = !isDark
    setIsDark(newDarkMode)
    if (newDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <SkillMatrix />
        <Features />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
