import { SectionContainer } from '@/components/common/SectionContainer';
import { SectionHeading } from '@/components/common/SectionHeading';
import { SocialLinks } from '@/components/common/SocialLinks';
import { Card } from '@/components/ui/card';
import { portfolio } from '@/data/portfolio';

export default function Contacts() {
  return (
    <SectionContainer id="contacts" ariaLabelledBy="contacts-heading">
      <SectionHeading
        id="contacts-heading"
        title="Contacts"
        description="Reach out for opportunities or collaboration."
      />
      <Card className="space-y-4">
        <p className="text-muted-foreground text-sm">
          Based in <span className="text-foreground font-medium">{portfolio.location}</span>.
          Connect via any of the channels below.
        </p>
        <SocialLinks links={portfolio.socialLinks} />
      </Card>
    </SectionContainer>
  );
}
