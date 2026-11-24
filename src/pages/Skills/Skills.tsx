import { SectionContainer } from '@/components/common/SectionContainer';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { skills } from '@/data/skills';

export default function Skills() {
  return (
    <SectionContainer id="skills" ariaLabelledBy="skills-heading">
      <SectionHeading
        id="skills-heading"
        title="Skills"
        description="Core technologies and tools."
      />
      <Card>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill.id}>{skill.name}</Badge>
          ))}
        </div>
      </Card>
    </SectionContainer>
  );
}
