import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from './ui/card';
import { Badge } from './ui/badge';
import { ArrowUpRight } from 'lucide-react';

interface Props {
  title: string;
  description: string;
  techStack: readonly string[];
  link?: {
    href: string;
    label: string;
  };
}

export function ProjectCard({ title, description, techStack, link }: Props) {
  return (
    <Card className="print:shadow-none flex flex-col">
      <CardHeader className="pb-3">
        <div className="space-y-1">
          <CardTitle className="text-base">
            {link ? (
              <a
                href={link.href}
                target="_blank"
                className="inline-flex items-center gap-1 hover:underline"
              >
                {title} <ArrowUpRight className="print:hidden" size={14} />
              </a>
            ) : (
              title
            )}
          </CardTitle>
          {link && (
            <div className="hidden pb-2 text-sm underline print:block">
              {link?.href
                .replace('https://', '')
                .replace('www.', '')
                .replace('/', '')}
            </div>
          )}
          <CardDescription className="text-sm">{description}</CardDescription>
        </div>
      </CardHeader>
      {techStack.length > 0 && (
        <CardContent className="mt-auto flex">
          <div className="mt-2 flex flex-wrap gap-1">
            {techStack.map((stack) => (
              <Badge variant="outline" key={stack}>
                {stack}
              </Badge>
            ))}
          </div>
        </CardContent>
      )}
    </Card>
  );
}
