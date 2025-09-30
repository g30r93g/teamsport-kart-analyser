"use client"

import { Button } from "@/components/ui/button"
import { useFilters } from "@/hooks/use-filters"
import { RotateCw, SquareX } from "lucide-react"
import { DateSelector } from "./date-selector"
import { VenueSelector } from "./venue-combobox"

export default function Filters() {
  const {
    venues,
    selectedVenueId,
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
    <div className="flex flex-col md:flex-row gap-4 items-end mb-4">
      <div className="grid max-md:grid-rows-3 md:grid-cols-[2fr_1fr_1fr] gap-4">
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
      </div>
      <div className="flex flex-row gap-2">
        <Button variant="outline" onClick={resetFilters}>
          <SquareX />
          Reset
        </Button>
        <Button variant="outline" onClick={() => {}}>
          <RotateCw />
          Refresh
        </Button>
      </div>
    </div>
  )
}
