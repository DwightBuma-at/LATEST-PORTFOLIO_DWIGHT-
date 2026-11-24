import { SectionContainer } from '@/components/common/SectionContainer';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <SectionContainer id="projects" ariaLabelledBy="projects-heading">
      <SectionHeading
        id="projects-heading"
        title="Projects"
        description="Selected work and technical case studies."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.id} className="flex flex-col justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-baseline justify-between gap-2">
                <h2 className="text-foreground text-lg font-semibold">{project.title}</h2>
                <span className="text-muted-foreground text-xs">{project.year}</span>
              </div>
              <p className="text-muted-foreground text-sm">{project.summary}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
