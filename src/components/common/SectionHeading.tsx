export interface SectionHeadingProps {
  id?: string;
  title: string;
  description?: string;
}

export function SectionHeading({ id, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-8 space-y-2">
      <h1 id={id} className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h1>
      {description ? (
        <p className="text-muted-foreground max-w-2xl text-sm sm:text-base">{description}</p>
      ) : null}
    </div>
  );
}
