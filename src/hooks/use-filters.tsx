"use client"

import { useCallback, useMemo, useState } from "react"

import type { Venue } from "@/types/venue"

interface UseFiltersOptions {
  initialVenues?: Venue[]
  initialSelectedVenueId?: string | undefined
  initialStartDate?: Date | undefined
  initialEndDate?: Date | undefined
}

interface FiltersState {
  venues: Venue[]
  selectedVenueId: string | undefined
  selectedVenue: Venue | undefined
  startDate: Date | undefined
  endDate: Date | undefined
  setStartDate: (date: Date | undefined) => void
  setEndDate: (date: Date | undefined) => void
  selectVenue: (venueId: string | undefined) => void
  resetFilters: () => void
}

const defaultVenues: Venue[] = [
  { id: "1", name: "Venue 1" },
  { id: "2", name: "Venue 2" },
  { id: "3", name: "Venue 3" },
]

export function useFilters(options: UseFiltersOptions = {}): FiltersState {
  const {
    initialVenues = defaultVenues,
    initialSelectedVenueId = undefined,
    initialStartDate = undefined,
    initialEndDate = undefined,
  } = options

  const [venues] = useState<Venue[]>(initialVenues)
  const [selectedVenueId, setSelectedVenueId] = useState<string | undefined>(
    initialSelectedVenueId,
  )
  const [startDate, setStartDate] = useState<Date | undefined>(initialStartDate)
  const [endDate, setEndDate] = useState<Date | undefined>(initialEndDate)

  const selectedVenue = useMemo(
    () => venues.find((venue) => venue.id === selectedVenueId) ?? undefined,
    [selectedVenueId, venues],
  )

  const selectVenue = useCallback((venueId: string | undefined) => {
    setSelectedVenueId(venueId)
  }, [])

  const resetFilters = useCallback(() => {
    setSelectedVenueId(undefined)
    setStartDate(undefined)
    setEndDate(undefined)
  }, [])

  return {
    venues,
    selectedVenueId,
    selectedVenue,
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    selectVenue,
    resetFilters,
  }
}

