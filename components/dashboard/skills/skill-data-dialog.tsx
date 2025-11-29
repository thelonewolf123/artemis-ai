"use client"

import { useState, useEffect } from "react"
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
import { Plus, Pencil } from "lucide-react"
import { toast } from "sonner"
import { upsertSkillData, SkillField } from "@/lib/skills-api"
import { useMutation, useQueryClient } from "@tanstack/react-query"

interface SkillDataDialogProps {
  chatId: string
  skillName: string
  fields: SkillField[]
  initialData?: any
  containerId?: number
  trigger?: React.ReactNode
}

export function SkillDataDialog({ 
  chatId, 
  skillName, 
  fields, 
  initialData, 
  containerId,
  trigger 
}: SkillDataDialogProps) {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState<Record<string, any>>({})
  const queryClient = useQueryClient()
  const isEditing = !!initialData

  useEffect(() => {
    if (open) {
      if (initialData) {
        setFormData(initialData)
      } else {
        setFormData({})
      }
    }
  }, [open, initialData])

  const mutation = useMutation({
    mutationFn: async () => {
      // If editing, we need a containerId. If creating, we generate a random one (or backend handles it)
      // The API requires containerId for upsert. 
      // If it's a new entry, we might need to generate a unique ID or let the backend handle it if 0/null.
      // Based on API definition: containerId: number.
      // Let's assume for creation we use a timestamp or random number if backend doesn't auto-generate.
      // However, usually upsert implies "update if exists, insert if not". 
      // If containerId is the unique identifier for the *row*, we need to know how to generate it for new rows.
      // Looking at the API, `upsertSkillData` takes `containerId`. 
      // If I send a new random ID, it should create.
      
      const id = containerId ?? Math.floor(Math.random() * 1000000000)
      
      return upsertSkillData(chatId, {
        skillName,
        data: formData,
        containerId: id,
        skillDescription: `Manual entry for ${skillName}`
      })
    },
    onSuccess: () => {
      toast.success(isEditing ? "Data updated successfully" : "Data added successfully")
      setOpen(false)
      setFormData({})
      queryClient.invalidateQueries({ queryKey: ["skillData", chatId, skillName] })
    },
    onError: () => {
      toast.error(isEditing ? "Failed to update data" : "Failed to add data")
    },
  })

  const handleInputChange = (fieldName: string, value: any) => {
    setFormData(prev => ({ ...prev, [fieldName]: value }))
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger ? trigger : (
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" /> Add Entry
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>{isEditing ? "Edit Entry" : "Add New Entry"}</DialogTitle>
          <DialogDescription>
            {isEditing ? "Update the values for this entry." : "Fill in the values for the new entry."}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          {fields.map((field) => (
            <div key={field.name} className="space-y-2">
              <Label htmlFor={field.name}>{field.name}</Label>
              {field.dataType === "boolean" ? (
                 <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id={field.name}
                      checked={!!formData[field.name]}
                      onChange={(e) => handleInputChange(field.name, e.target.checked)}
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <span className="text-sm text-muted-foreground">{field.description}</span>
                 </div>
              ) : field.dataType === "number" ? (
                <Input
                  id={field.name}
                  type="number"
                  value={formData[field.name] || ""}
                  onChange={(e) => handleInputChange(field.name, Number(e.target.value))}
                  placeholder={field.description}
                />
              ) : field.dataType === "date" ? (
                <Input
                  id={field.name}
                  type="datetime-local"
                  value={formData[field.name] || ""}
                  onChange={(e) => handleInputChange(field.name, e.target.value)}
                />
              ) : (
                <Input
                  id={field.name}
                  value={formData[field.name] || ""}
                  onChange={(e) => handleInputChange(field.name, e.target.value)}
                  placeholder={field.description}
                />
              )}
            </div>
          ))}
          {fields.length === 0 && (
            <p className="text-muted-foreground text-center">No fields defined for this skill.</p>
          )}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => mutation.mutate()} disabled={mutation.isPending}>
            {mutation.isPending ? "Saving..." : "Save"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
