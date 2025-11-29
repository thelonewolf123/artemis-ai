import { TelegramConnect } from "@/components/dashboard/telegram-connect"
import { SkillMatrixDashboard } from "@/components/dashboard/skill-matrix-dashboard"

export default function DashboardPage() {
  return (
    <div className="container mx-auto py-10 space-y-8">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Manage your Artemis bot settings and skills.
        </p>
      </div>
      
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <TelegramConnect />
        </div>
        <div className="md:col-span-2">
          <SkillMatrixDashboard />
        </div>
      </div>
    </div>
  )
}
