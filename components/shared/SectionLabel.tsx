export function SectionLabel({
  number: _number,
  label,
  tone = 'light',
}: {
  number?: string | number;
  label: string;
  /** Use 'dark' when this label sits on a black/bg-primary section, so the text stays visible. */
  tone?: 'light' | 'dark';
}) {
  return (
    <div className="mb-6">
      <div
        className={
          tone === 'dark'
            ? 'text-xs font-bold uppercase tracking-[0.14em] text-accent'
            : 'text-xs font-bold uppercase tracking-[0.14em] text-primary'
        }
      >
        {label}
      </div>
    </div>
  );
}