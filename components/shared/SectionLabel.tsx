export function SectionLabel({ number: _number, label }: { number?: string | number; label: string }) {
  return (
    <div className="mb-6">
      <div className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
        {label}
      </div>
    </div>
  );
}