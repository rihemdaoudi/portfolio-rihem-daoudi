interface SectionTitleProps {
  title: string
  subtitle?: string
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-14">
      {subtitle && (
        <p className="text-xs font-black text-accent uppercase tracking-[0.22em] mb-3">
          {subtitle}
        </p>
      )}
      <h2 className="font-display font-black text-3xl sm:text-4xl text-forest dark:text-white leading-tight">
        {title}
      </h2>
      <div className="accent-line mt-4" />
    </div>
  )
}
