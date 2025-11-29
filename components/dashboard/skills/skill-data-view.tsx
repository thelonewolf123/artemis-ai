"use client"

import { Button } from "@/components/ui/button"
import { RefreshCw, Pencil, Trash2 } from "lucide-react"
import { getSkillData, getSkills, deleteSkillData } from "@/lib/skills-api"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { toast } from "sonner"
import { SkillDataDialog } from "./skill-data-dialog"

interface SkillDataViewProps {
  chatId: string
  skillName: string
}

export function SkillDataView({ chatId, skillName }: SkillDataViewProps) {
  const queryClient = useQueryClient()

  // Fetch skill definition to get fields
  const { data: skills = [] } = useQuery({
    queryKey: ["skills", chatId],
    queryFn: async () => {
      const res = await getSkills(chatId)
      if (res.skills) return res.skills
      if (Array.isArray(res)) return res
      if (res.data) return res.data
      return []
    },
  })

  const currentSkill = skills.find((s: any) => s.name === skillName)
  const fields = currentSkill?.fields || []

  // Fetch skill data
  const { data, isLoading, isError } = useQuery({
    queryKey: ["skillData", chatId, skillName],
    queryFn: async () => {
      const res = await getSkillData(chatId, skillName)
      if (res.entries && Array.isArray(res.entries)) return res.entries
      return []
    },
    enabled: !!skillName,
  })

  const deleteMutation = useMutation({
    mutationFn: async (containerId: number) => {
      return deleteSkillData(chatId, skillName, containerId)
    },
    onSuccess: () => {
      toast.success("Entry deleted successfully")
      queryClient.invalidateQueries({ queryKey: ["skillData", chatId, skillName] })
    },
    onError: () => {
      toast.error("Failed to delete entry")
    },
  })

  if (!skillName) return null

  return (
    <div className="h-full flex flex-col border-none shadow-none">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">{skillName}</h2>
          <p className="text-muted-foreground">
            {currentSkill?.description || "Manage data for this skill."}
          </p>
        </div>
        <div className="flex items-center gap-2">
           <Button variant="outline" size="icon" onClick={() => queryClient.invalidateQueries({ queryKey: ["skillData", chatId, skillName] })}>
            <RefreshCw className="h-4 w-4" />
          </Button>
          <SkillDataDialog 
            chatId={chatId} 
            skillName={skillName} 
            fields={fields} 
          />
        </div>
      </div>

      <div className="rounded-md border flex-1 overflow-hidden flex flex-col">
        <div className="overflow-auto flex-1">
          <Table>
            <TableHeader className="bg-muted/50 sticky top-0 z-10">
              <TableRow>
                {fields.map((field: any) => (
                  <TableHead key={field.name} className="whitespace-nowrap">
                    {field.name}
                  </TableHead>
                ))}
                {fields.length === 0 && <TableHead>Data</TableHead>}
                <TableHead className="w-[100px] text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={fields.length + 1} className="h-24 text-center">
                    <RefreshCw className="animate-spin h-6 w-6 mx-auto text-muted-foreground" />
                  </TableCell>
                </TableRow>
              ) : isError ? (
                <TableRow>
                  <TableCell colSpan={fields.length + 1} className="h-24 text-center text-destructive">
                    Failed to load data.
                  </TableCell>
                </TableRow>
              ) : !data || data.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={fields.length + 1} className="h-24 text-center text-muted-foreground">
                    No entries found.
                  </TableCell>
                </TableRow>
              ) : (
                data.map((item: any) => (
                  <TableRow key={item.containerId || item._id}>
                    {fields.map((field: any) => (
                      <TableCell key={field.name} className="whitespace-nowrap">
                        {typeof item.data?.[field.name] === 'object' 
                          ? JSON.stringify(item.data?.[field.name]) 
                          : String(item.data?.[field.name] ?? "")}
                      </TableCell>
                    ))}
                    {fields.length === 0 && (
                      <TableCell>
                        <pre className="text-xs">{JSON.stringify(item.data, null, 2)}</pre>
                      </TableCell>
                    )}
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <SkillDataDialog 
                          chatId={chatId} 
                          skillName={skillName} 
                          fields={fields}
                          initialData={item.data}
                          containerId={item.containerId}
                          trigger={
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Pencil className="h-4 w-4" />
                            </Button>
                          }
                        />
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8 text-destructive hover:text-destructive"
                          onClick={() => {
                            if (confirm("Are you sure you want to delete this entry?")) {
                              deleteMutation.mutate(item.containerId)
                            }
                          }}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
