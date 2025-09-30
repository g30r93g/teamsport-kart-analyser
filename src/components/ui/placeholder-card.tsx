import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type React from "react"

interface PlaceholderCardProps {
  className?: string
  height?: string
  children?: React.ReactNode
}

export function PlaceholderCard({ className, height = "h-64", children }: PlaceholderCardProps) {
  return (
    <Card className={cn("relative overflow-hidden", className)}>
      <CardContent className={cn("flex items-center justify-center", height)}>
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="diagonal-lines"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(45)"
              >
                <line x1="0" y1="0" x2="0" y2="20" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonal-lines)" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 text-muted-foreground">{children || "Placeholder Content"}</div>
      </CardContent>
    </Card>
  )
}
