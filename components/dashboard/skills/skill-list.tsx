"use client"

import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Eye, Trash2 } from "lucide-react"
import { toast } from "sonner"
import { deleteSkill } from "@/lib/skills-api"
import { useMutation, useQueryClient } from "@tanstack/react-query"

interface SkillListProps {
  chatId: string
  skills: any[]
  onRefresh: () => void
  onViewData: (skillName: string) => void
}

export function SkillList({ chatId, skills, onRefresh, onViewData }: SkillListProps) {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: async (name: string) => {
      return deleteSkill(chatId, name)
    },
    onSuccess: () => {
      toast.success("Skill deleted")
      onRefresh()
      queryClient.invalidateQueries({ queryKey: ["skills", chatId] })
    },
    onError: () => {
      toast.error("Failed to delete skill")
    },
  })

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {skills.length === 0 ? (
            <TableRow>
              <TableCell colSpan={3} className="text-center py-8 text-muted-foreground">
                No skills found. Create one to get started.
              </TableCell>
            </TableRow>
          ) : (
            skills.map((skill: any) => (
              <TableRow key={skill.name || skill.skillName}>
                <TableCell className="font-medium">{skill.name || skill.skillName}</TableCell>
                <TableCell>{skill.description}</TableCell>
                <TableCell className="text-right space-x-2">
                  <Button variant="ghost" size="icon" onClick={() => onViewData(skill.name || skill.skillName)}>
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => mutation.mutate(skill.name || skill.skillName)}
                    disabled={mutation.isPending}
                  >
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}
