"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Plus, RefreshCw, LayoutDashboard, Settings } from "lucide-react"
import { CreateSkillDialog } from "./skills/create-skill-dialog"
import { HARDCODED_CHAT_ID } from "@/lib/skills-api"

interface SidebarProps {
  skills: any[]
  isLoading: boolean
  onRefresh: () => void
}

export function Sidebar({ skills, isLoading, onRefresh }: SidebarProps) {
  const searchParams = useSearchParams()
  const activeSkill = searchParams.get("skill")

  return (
    <div className="w-64 border-r bg-card h-[calc(100vh-4rem)] flex flex-col">
      <div className="p-4 border-b flex items-center justify-between">
        <h2 className="font-semibold tracking-tight">Skills</h2>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" onClick={onRefresh} disabled={isLoading} className="h-8 w-8">
            <RefreshCw className={cn("h-4 w-4", isLoading && "animate-spin")} />
          </Button>
          <CreateSkillDialog chatId={HARDCODED_CHAT_ID} onSkillCreated={onRefresh} trigger={
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Plus className="h-4 w-4" />
            </Button>
          } />
        </div>
      </div>
      
      <ScrollArea className="flex-1 py-2">
        <div className="px-2 space-y-1">
          <Button
            variant={!activeSkill ? "secondary" : "ghost"}
            className="w-full justify-start"
            asChild
          >
            <Link href="/dashboard">
              <LayoutDashboard className="mr-2 h-4 w-4" />
              Overview
            </Link>
          </Button>
        </div>

        <div className="mt-4 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
          Your Skills
        </div>
        
        <div className="px-2 space-y-1">
          {skills.map((skill) => (
            <Button
              key={skill.name}
              variant={activeSkill === skill.name ? "secondary" : "ghost"}
              className="w-full justify-start truncate"
              asChild
            >
              <Link href={`/dashboard?skill=${encodeURIComponent(skill.name)}`}>
                <span className="truncate">{skill.name}</span>
              </Link>
            </Button>
          ))}
          
          {skills.length === 0 && !isLoading && (
            <div className="px-2 py-4 text-sm text-muted-foreground text-center">
              No skills found. Create one to get started.
            </div>
          )}
        </div>
      </ScrollArea>
      
      <div className="p-4 border-t mt-auto">
        <Button variant="ghost" className="w-full justify-start" disabled>
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
      </div>
    </div>
  )
}
