"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"
import { getSkills } from "@/lib/skills-api"
import { SkillList } from "./skills/skill-list"
import { CreateSkillDialog } from "./skills/create-skill-dialog"
import { SkillDataView } from "./skills/skill-data-view"
import { useQuery } from "@tanstack/react-query"

import { HARDCODED_CHAT_ID } from "@/lib/skills-api"

export function SkillMatrixDashboard() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null)

  const { data: skills = [], isLoading, refetch } = useQuery({
    queryKey: ["skills", HARDCODED_CHAT_ID],
    queryFn: async () => {
      const res = await getSkills(HARDCODED_CHAT_ID)
      console.log(res)
      if (res.skills) return res.skills
      if (Array.isArray(res)) return res
      if (res.data) return res.data
      return []
    },
  })

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Skills Matrix</CardTitle>
            <CardDescription>Manage your AI's skills and capabilities.</CardDescription>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="icon" onClick={() => refetch()} disabled={isLoading}>
              <RefreshCw className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
            </Button>
            <CreateSkillDialog chatId={HARDCODED_CHAT_ID} onSkillCreated={() => refetch()} />
          </div>
        </CardHeader>
        <CardContent>
          <SkillList 
            chatId={HARDCODED_CHAT_ID} 
            skills={skills} 
            onRefresh={() => refetch()} 
            onViewData={setSelectedSkill} 
          />
        </CardContent>
      </Card>

      {selectedSkill && (
        <SkillDataView chatId={HARDCODED_CHAT_ID} skillName={selectedSkill} />
      )}
    </div>
  )
}
