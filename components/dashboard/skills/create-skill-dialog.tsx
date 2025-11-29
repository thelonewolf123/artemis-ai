"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Plus } from "lucide-react"
import { toast } from "sonner"
import { createSkill, SkillField } from "@/lib/skills-api"
import { SkillFieldInput } from "./skill-field-input"
import { useMutation, useQueryClient } from "@tanstack/react-query"

interface CreateSkillDialogProps {
  chatId: string
  onSkillCreated: () => void
  trigger?: React.ReactNode
}

export function CreateSkillDialog({ chatId, onSkillCreated, trigger }: CreateSkillDialogProps) {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [fields, setFields] = useState<SkillField[]>([])
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: async () => {
      return createSkill(chatId, {
        name,
        description,
        fields,
      })
    },
    onSuccess: () => {
      toast.success("Skill created successfully")
      setOpen(false)
      setName("")
      setDescription("")
      setFields([])
      onSkillCreated()
      queryClient.invalidateQueries({ queryKey: ["skills", chatId] })
    },
    onError: () => {
      toast.error("Failed to create skill")
    },
  })

  const addField = () => {
    setFields([...fields, { name: "", dataType: "string", description: "" }])
  }

  const updateField = (index: number, key: keyof SkillField, value: string) => {
    const updated = [...fields]
    updated[index] = { ...updated[index], [key]: value }
    setFields(updated)
  }

  const removeField = (index: number) => {
    const updated = [...fields]
    updated.splice(index, 1)
    setFields(updated)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger ? trigger : (
          <Button>
            <Plus className="mr-2 h-4 w-4" /> New Skill
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Create New Skill</DialogTitle>
          <DialogDescription>Define a new capability for Artemis.</DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label>Skill Name</Label>
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g., Calendar" />
          </div>
          <div className="space-y-2">
            <Label>Description</Label>
            <Textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="What does this skill do?" />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label>Fields</Label>
              <Button variant="outline" size="sm" onClick={addField}>
                Add Field
              </Button>
            </div>
            <div className="space-y-2 max-h-[200px] overflow-y-auto border p-2 rounded-md">
              {fields.map((field, idx) => (
                <SkillFieldInput
                  key={idx}
                  index={idx}
                  field={field}
                  onUpdate={updateField}
                  onRemove={removeField}
                />
              ))}
              {fields.length === 0 && (
                <p className="text-sm text-muted-foreground text-center py-2">No fields defined.</p>
              )}
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => mutation.mutate()} disabled={!name || mutation.isPending}>
            {mutation.isPending ? "Creating..." : "Create Skill"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
