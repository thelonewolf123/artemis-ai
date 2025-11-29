"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RefreshCw } from "lucide-react"
import { getSkillData } from "@/lib/skills-api"
import { useQuery } from "@tanstack/react-query"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { format } from "date-fns"

interface SkillDataViewProps {
  chatId: string
  skillName: string
}

export function SkillDataView({ chatId, skillName }: SkillDataViewProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["skillData", chatId, skillName],
    queryFn: async () => {
      const res = await getSkillData(chatId, skillName)
      if (res.entries && Array.isArray(res.entries)) return res.entries
      return []
    },
    enabled: !!skillName,
  })

  console.log(data)

  if (!skillName) return null

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Data: {skillName}</CardTitle>
        <CardDescription>Viewing stored data for this skill.</CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="flex justify-center py-8">
            <RefreshCw className="animate-spin h-6 w-6 text-muted-foreground" />
          </div>
        ) : isError ? (
          <div className="text-center py-8 text-destructive">Failed to load data.</div>
        ) : (
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Data Payload</TableHead>
                  <TableHead className="text-right">Created At</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {!data || data.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={3} className="text-center py-8 text-muted-foreground">
                      No data records found for this skill.
                    </TableCell>
                  </TableRow>
                ) : (
                  data.map((item: any) => (
                    <TableRow key={item._id}>
                      <TableCell className="font-medium whitespace-nowrap">
                        {item.data?.date || "N/A"}
                      </TableCell>
                      <TableCell>
                        <pre className="text-xs whitespace-pre-wrap">
                          {JSON.stringify(item.data, null, 2)}
                        </pre>
                      </TableCell>
                      <TableCell className="text-right whitespace-nowrap text-muted-foreground text-xs">
                        {item.createdAt ? format(new Date(item.createdAt), "PP p") : "N/A"}
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
