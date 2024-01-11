import { cn } from '@/app/lib/utils';

export default function Section({
  title,
  children,
  avoidPageBreak,
}: {
  title: string;
  children: React.ReactNode;
  avoidPageBreak?: boolean;
}) {
  return (
    <section
      className={cn(
        'flex min-h-0 flex-col gap-y-3',
        avoidPageBreak && 'print:break-inside-avoid'
      )}
    >
      <h2 className="text-xl font-bold">{title}</h2>
      {children}
    </section>
  );
}
