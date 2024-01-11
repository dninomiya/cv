import { ProjectCard } from '@/app/components/project-card';
import Section from '@/app/components/section';
import ToolBar from '@/app/components/toolbar';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader } from '@/app/components/ui/card';
import { getData } from '@/data';
import { getI18n, getStaticParams } from '@/locales/server';
import { format } from 'date-fns';
import { Globe } from 'lucide-react';
import { setStaticParamsLocale } from 'next-international/server';
import Image from 'next/image';

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setStaticParamsLocale(locale);

  const t = await getI18n();
  const data = getData();

  return (
    <main className="container max-w-2xl py-10 sm:py-16 mb-6 print:mb-0 print:py-6 space-y-8">
      <section>
        <p className="text-right italic text-sm mb-4 text-muted-foreground">
          <time>{format(new Date(data.lastUpdatedAt), 'yyyy-MM-dd')}</time>
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <div>
            <Image
              src={data.avatarUrl}
              alt=""
              width={112}
              height={112}
              className="rounded-xl"
            />
          </div>
          <div className="*:leading-none">
            {data.globalName && (
              <p className="text-xs mb-2 text-muted-foreground">
                {data.globalName}
              </p>
            )}
            <h1 className="text-2xl mb-3 font-bold">{data.name}</h1>
            <p className="text-muted-foreground mb-3">{data.bio}</p>
            <p className="flex items-center gap-1 text-sm text-muted-foreground">
              <Globe size={14} />
              {data.location}
            </p>
          </div>
        </div>
      </section>

      <Section title={t('about')}>
        <p className="text-base text-pretty text-muted-foreground leading-relaxed">
          {data.summary}
        </p>
      </Section>

      <Section title={t('workExperience')}>
        {data.work.map((work) => {
          return (
            <Card key={work.company} className="print:shadow-none">
              <CardHeader>
                <div className="text-sm text-right tabular-nums text-muted-foreground sm:hidden">
                  {work.start} - {work.end}
                </div>
                <div className="flex items-center justify-between gap-x-2">
                  <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                    <a
                      className="hover:underline"
                      target="_blank"
                      href={work.link}
                    >
                      {work.company}
                    </a>

                    <span className="hidden sm:inline-flex gap-x-1">
                      {work.badges.map((badge) => (
                        <Badge variant="outline" key={badge}>
                          {badge}
                        </Badge>
                      ))}
                    </span>
                  </h3>
                  <div className="text-sm tabular-nums text-muted-foreground hidden sm:block">
                    {work.start} - {work.end}
                  </div>
                </div>

                <h4 className="text-sm leading-none">{work.title}</h4>

                {work.badges.length > 0 && (
                  <div className="contents">
                    <div className="flex sm:hidden gap-1 mt-4">
                      {work.badges.map((badge) => (
                        <Badge variant="outline" key={badge}>
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {work.description}
              </CardContent>
            </Card>
          );
        })}
      </Section>

      {data.education.length > 0 && (
        <Section title={t('education')}>
          {data.education.map((education) => {
            return (
              <Card key={education.school} className="print:shadow-none">
                <CardHeader>
                  <div className="text-sm text-right tabular-nums text-muted-foreground sm:hidden">
                    {education.start} - {education.end}
                  </div>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="font-semibold leading-none">
                      {education.school}
                    </h3>
                    <div className="text-sm tabular-nums text-muted-foreground hidden sm:block">
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  {education.degree}
                </CardContent>
              </Card>
            );
          })}
        </Section>
      )}

      <Section title={t('skills')} avoidPageBreak>
        <div className="flex flex-wrap gap-2">
          {data.skills.map((skill) => (
            <Badge variant="outline" key={skill}>
              {skill}
            </Badge>
          ))}
        </div>
      </Section>

      <Section title={t('projects')}>
        <div className="overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {data.projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </Section>

      <Section title={t('contacts')} avoidPageBreak>
        <div className="flex flex-wrap gap-2">
          {data.contacts.map((contact) => (
            <Button size="sm" key={contact.href} variant="outline" asChild>
              <a href={contact.href} target="_blank">
                <contact.icon className="mr-2" size={15} />
                {contact.label}
                <span className="hidden print:block">
                  : {contact.href.replace(/mailto:|tel:/, '')}
                </span>
              </a>
            </Button>
          ))}
        </div>
      </Section>

      <Section title={t('links')} avoidPageBreak>
        <div className="flex flex-wrap gap-2">
          {data.links.map((link) => (
            <Button size="sm" key={link.href} variant="outline" asChild>
              <a href={link.href} target="_blank">
                <link.icon className="mr-2" size={15} />
                {link.label}
                <span className="hidden print:block">
                  : {link.href.replace(/mailto:|tel:/, '')}
                </span>
              </a>
            </Button>
          ))}
        </div>
      </Section>

      <div className="print:hidden">
        <ToolBar data={data} />
      </div>
    </main>
  );
}

export function generateStaticParams() {
  return getStaticParams();
}
