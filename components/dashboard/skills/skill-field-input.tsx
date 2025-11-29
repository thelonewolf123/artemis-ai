"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"
import { SkillField } from "@/lib/skills-api"

interface SkillFieldInputProps {
  field: SkillField
  index: number
  onUpdate: (index: number, key: keyof SkillField, value: string) => void
  onRemove: (index: number) => void
}

export function SkillFieldInput({ field, index, onUpdate, onRemove }: SkillFieldInputProps) {
  return (
    <div className="flex gap-2 items-start border-b pb-2 last:border-0">
      <Input
        placeholder="Name"
        value={field.name}
        onChange={(e) => onUpdate(index, "name", e.target.value)}
        className="h-8"
      />
      <select
        className="h-8 border rounded px-2 text-sm bg-background"
        value={field.dataType}
        onChange={(e) => onUpdate(index, "dataType", e.target.value as any)}
      >
        <option value="string">String</option>
        <option value="number">Number</option>
        <option value="boolean">Boolean</option>
        <option value="date">Date</option>
        <option value="array">Array</option>
        <option value="object">Object</option>
      </select>
      <Input
        placeholder="Desc"
        value={field.description || ""}
        onChange={(e) => onUpdate(index, "description", e.target.value)}
        className="h-8"
      />
      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => onRemove(index)}>
        <Trash2 className="h-4 w-4 text-destructive" />
      </Button>
    </div>
  )
}
