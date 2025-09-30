"use client"

import { Button } from "@/components/ui/button"
import { useFilters } from "@/hooks/use-filters"
import { RotateCw, SquareX } from "lucide-react"
import { DateSelector } from "./date-selector"
import Labelise from "./labelise"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"
import { VenueSelector } from "./venue-combobox"

export default function Filters() {
  const {
    venues,
    selectedVenueId,
    selectedVenue,
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    selectVenue,
    resetFilters,
  } = useFilters()

  const now = new Date();
  const tomorrow: Date = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);

  return (
    <Accordion type="single" collapsible className="rounded-md border border-2 p-2 bg-accent">
       <AccordionItem value="filters">
        <AccordionTrigger>
          <span className="text-background-muted text-sm">Filters</span>
          {(selectedVenue) && <h2>{selectedVenue.name}</h2>}
        </AccordionTrigger>
        <AccordionContent className="grid max-md:grid-rows-3 md:grid-cols-[4fr_3fr_3fr_4fr] gap-4">
            <VenueSelector
              venues={venues}
              selectedVenueId={selectedVenueId}
              onVenueSelect={selectVenue}
            />
            <DateSelector
              label="Start date"
              selectedDate={startDate}
              onDateChange={setStartDate}
              active={!!selectedVenueId}
              endDate={tomorrow}
            />
            <DateSelector
              label="End date"
              selectedDate={endDate}
              onDateChange={setEndDate}
              active={!!selectedVenueId && !!startDate}
              endDate={tomorrow}
            />
          <Labelise label="Actions">
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" onClick={resetFilters}>
                <SquareX />
                Reset
              </Button>
              <Button variant="outline" onClick={() => {}}>
                <RotateCw />
                Refresh
              </Button>
            </div>
          </Labelise>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
