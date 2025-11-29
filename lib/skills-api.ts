import { z } from "zod"

const BASE_URL = `${process.env.NEXT_PUBLIC_N8N_WORKFLOW_UTILS_URL}/artemis`
export const  HARDCODED_CHAT_ID = process.env.NEXT_PUBLIC_HARDCODED_CHAT_ID!

export interface SkillField {
  name: string
  dataType: "string" | "number" | "boolean" | "date" | "array" | "object"
  description?: string
}

export interface CreateSkillRequest {
  action: "create"
  name: string
  description?: string
  fields?: SkillField[]
}

export interface UpdateSkillRequest {
  action: "update"
  skillName: string
  newName?: string
  description?: string
  fields?: SkillField[]
}

export interface DeleteSkillRequest {
  action: "delete"
  skillName: string
}

export interface GetSkillsRequest {
  action: "get"
}

export interface UpsertSkillDataRequest {
  action: "upsert"
  skillName: string
  data: Record<string, any>
  containerId: number
  skillDescription?: string
}

export interface DeleteSkillDataRequest {
  action: "delete"
  skillName: string
  containerId: number
}

export interface GetSkillDataRequest {
  action: "get"
  skillName: string
}

export async function getSkills(chatId: string) {
  const response = await fetch(`${BASE_URL}/skills/${chatId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action: "get" }),
  })
  if (!response.ok) throw new Error("Failed to fetch skills")
  return response.json()
}

export async function createSkill(chatId: string, skill: Omit<CreateSkillRequest, "action">) {
  const response = await fetch(`${BASE_URL}/skills/${chatId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action: "create", ...skill }),
  })
  if (!response.ok) throw new Error("Failed to create skill")
  return response.json()
}

export async function updateSkill(chatId: string, skill: Omit<UpdateSkillRequest, "action">) {
  const response = await fetch(`${BASE_URL}/skills/${chatId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action: "update", ...skill }),
  })
  if (!response.ok) throw new Error("Failed to update skill")
  return response.json()
}

export async function deleteSkill(chatId: string, skillName: string) {
  const response = await fetch(`${BASE_URL}/skills/${chatId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action: "delete", skillName }),
  })
  if (!response.ok) throw new Error("Failed to delete skill")
  return response.json()
}

export async function getSkillData(chatId: string, skillName: string) {
  const response = await fetch(`${BASE_URL}/skills-data/${chatId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action: "get", skillName }),
  })
  if (!response.ok) throw new Error("Failed to fetch skill data")
  return response.json()
}

export async function upsertSkillData(chatId: string, data: Omit<UpsertSkillDataRequest, "action">) {
  const response = await fetch(`${BASE_URL}/skills-data/${chatId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action: "upsert", ...data }),
  })
  if (!response.ok) throw new Error("Failed to upsert skill data")
  return response.json()
}

export async function deleteSkillData(chatId: string, skillName: string, containerId: number) {
  const response = await fetch(`${BASE_URL}/skills-data/${chatId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action: "delete", skillName, containerId }),
  })
  if (!response.ok) throw new Error("Failed to delete skill data")
  return response.json()
}
