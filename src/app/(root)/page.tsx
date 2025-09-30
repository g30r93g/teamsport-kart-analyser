import Filters from "@/components/filters"
import { PlaceholderCard } from "@/components/ui/placeholder-card"
import { TriangleAlert } from "lucide-react"

export default function VenueSelectorPage() {
  return (
    <div className="flex flex-col min-h-screen gap-4">
      <Filters />
      <PlaceholderCard>
        <div className="flex flex-col gap-2 items-center justify-center">
          <TriangleAlert className="h-12 w-12" color="orange" />
          <p>This software is under development. Check back soon for a working version.</p>
        </div>
      </PlaceholderCard>
      {/* Ranking table */}
      {/* Kart-to-Kart comparison */}
    </div>
  )
}
