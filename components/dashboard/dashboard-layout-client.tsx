"use client"

import { useState, useEffect } from "react"
import Header from "@/components/common/header"
import { Sidebar } from "./sidebar"
import { useQuery } from "@tanstack/react-query"
import { getSkills, HARDCODED_CHAT_ID } from "@/lib/skills-api"

export function DashboardLayoutClient({ children }: { children: React.ReactNode }) {
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

  const { data: skills = [], isLoading, refetch } = useQuery({
    queryKey: ["skills", HARDCODED_CHAT_ID],
    queryFn: async () => {
      const res = await getSkills(HARDCODED_CHAT_ID)
      if (res.skills) return res.skills
      if (Array.isArray(res)) return res
      if (res.data) return res.data
      return []
    },
  })

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <div className="pt-[72px] flex h-screen overflow-hidden">
        <Sidebar skills={skills} isLoading={isLoading} onRefresh={() => refetch()} />
        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
