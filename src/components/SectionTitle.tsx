interface SectionTitleProps {
  title: string
  subtitle?: string
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-12">
      {subtitle && (
        <p className="text-accent font-medium text-sm uppercase tracking-widest mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="font-display font-bold text-3xl sm:text-4xl text-charcoal">
        {title}
      </h2>
    </div>
  )
}
