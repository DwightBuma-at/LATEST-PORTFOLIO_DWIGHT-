import { SectionContainer } from '@/components/common/SectionContainer';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Card } from '@/components/ui/card';
import { portfolio } from '@/data/portfolio';

export default function AboutMe() {
  return (
    <SectionContainer id="about-me" ariaLabelledBy="about-me-heading">
      <SectionHeading
        id="about-me-heading"
        title="About Me"
        description="Background and focus areas."
      />
      <Card>
        <p className="text-muted-foreground max-w-3xl text-sm leading-relaxed sm:text-base">
          {portfolio.aboutSummary}
        </p>
      </Card>
    </SectionContainer>
  );
}
