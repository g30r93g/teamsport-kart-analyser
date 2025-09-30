export default function Labelise({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-muted-foreground text-sm">{label}</p>
      {children}
    </div>
  )
}
