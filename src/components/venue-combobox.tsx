"use client"

import { CheckIcon, ChevronsUpDownIcon } from "lucide-react"
import { useMemo, useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import type { Venue } from "@/types/venue"

interface VenueSelectorProps {
  venues: Venue[]
  selectedVenueId: string | undefined
  onVenueSelect: (venueId: string | undefined) => void
}

export function VenueSelector({
  venues,
  selectedVenueId,
  onVenueSelect,
}: VenueSelectorProps) {
  const [open, setOpen] = useState(false)

  const selectedVenueName = useMemo(() => {
    if (!selectedVenueId) {
      return null
    }

    return venues.find((venue) => venue.id === selectedVenueId)?.name ?? null
  }, [selectedVenueId, venues])

  const buttonLabel = selectedVenueName ?? "Select venue..."

  return (
    <div className="flex flex-col gap-2">
      <p className="text-muted-foreground text-sm">Venue</p>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            {buttonLabel}
            <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[300px] p-0" align="start">
          <Command>
            <CommandInput placeholder="Search venues..." />
            <CommandList>
              <CommandEmpty>No venues found.</CommandEmpty>
              <CommandGroup>
                {venues.map((venue) => {
                  const isSelected = selectedVenueId === venue.id

                  return (
                    <CommandItem
                      key={venue.id}
                      value={venue.id}
                      onSelect={() => {
                        onVenueSelect(isSelected ? undefined : venue.id)
                        setOpen(false)
                      }}
                    >
                      <CheckIcon
                        className={cn(
                          "mr-2 h-4 w-4",
                          isSelected ? "opacity-100" : "opacity-0",
                        )}
                      />
                      {venue.name}
                    </CommandItem>
                  )
                })}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}
