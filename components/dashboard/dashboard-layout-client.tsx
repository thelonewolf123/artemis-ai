"use client"

import { Sidebar } from "./sidebar"
import { useQuery } from "@tanstack/react-query"
import { getSkills, HARDCODED_CHAT_ID } from "@/lib/skills-api"

export function DashboardLayoutClient({ children }: { children: React.ReactNode }) {


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
        <div className="pt-[72px] flex h-screen overflow-hidden">
            <Sidebar skills={skills} isLoading={isLoading} onRefresh={() => refetch()} />
            <main className="flex-1 overflow-y-auto p-8">
                {children}
            </main>
        </div>
    )
}
