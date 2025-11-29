import { TelegramConnect } from "@/components/dashboard/telegram-connect"
import { SkillDataView } from "@/components/dashboard/skills/skill-data-view"
import { HARDCODED_CHAT_ID } from "@/lib/skills-api"

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function DashboardPage({ searchParams }: PageProps) {
  const params = await searchParams
  const skillName = typeof params.skill === 'string' ? params.skill : null

  if (skillName) {
    return (
      <div className="space-y-6">
        <SkillDataView chatId={HARDCODED_CHAT_ID} skillName={skillName} />
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Manage your Artemis bot settings and skills. Select a skill from the sidebar to view details.
        </p>
      </div>
      
      <div className="grid gap-8 md:grid-cols-2">
        <div className="md:col-span-1">
          <TelegramConnect />
        </div>
      </div>
    </div>
  )
}
