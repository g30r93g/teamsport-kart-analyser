"use client"

import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Labelise from "./labelise"

export function DateSelector({
  label,
  onDateChange,
  selectedDate,
  active = false,
  startDate,
  endDate,
}: {
  label: string,
  onDateChange?: (date: Date) => void
  selectedDate?: Date
  active?: boolean
  startDate?: Date | null
  endDate?: Date | null
}) {
  const [date, setDate] = useState<Date | undefined>(selectedDate)

  const handleDateChange = (newDate: Date | undefined) => {
    setDate(newDate)
    if (newDate && onDateChange) {
      onDateChange(newDate)
    }
  }

  return (
    <Labelise label={label}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            data-empty={!date}
            className="data-[empty=true]:text-muted-foreground w-full justify-start text-left font-normal"
            disabled={!active}
          >
            <CalendarIcon />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar mode="single" selected={date} onSelect={handleDateChange} disabled={{from: startDate ?? undefined, to: endDate ?? undefined}} />
        </PopoverContent>
      </Popover>
    </Labelise>
  )
}
