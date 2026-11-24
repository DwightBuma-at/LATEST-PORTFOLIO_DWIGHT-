import { SectionContainer } from '@/components/common/SectionContainer';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Card } from '@/components/ui/card';
import { experiences } from '@/data/experience';

export default function Experience() {
  return (
    <SectionContainer id="experience" ariaLabelledBy="experience-heading">
      <SectionHeading
        id="experience-heading"
        title="Experience"
        description="Professional roles and engineering impact."
      />
      <div className="space-y-4">
        {experiences.map((item) => (
          <Card key={item.id} className="space-y-3">
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <div>
                <h2 className="text-foreground text-lg font-semibold">{item.role}</h2>
                <p className="text-muted-foreground text-sm font-medium">
                  {item.organization} &middot; {item.location}
                </p>
              </div>
              <span className="text-muted-foreground text-xs font-medium">{item.period}</span>
            </div>
            <p className="text-muted-foreground text-sm">{item.summary}</p>
            <ul className="text-muted-foreground list-disc space-y-1 pl-5 text-sm">
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
