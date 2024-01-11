import { Button } from '@/app/components/ui/button';
import {
  SiFacebook,
  SiGithub,
  SiLine,
  SiLinkedin,
  SiX,
  SiZenn,
} from '@icons-pack/react-simple-icons';
import { Slot } from '@radix-ui/react-slot';
import { Globe2, Mail, Phone } from 'lucide-react';
import { useMemo } from 'react';

const patterns = [
  {
    pattern: /https:\/\/github.com\/(.*)/,
    icon: <SiGithub />,
    title: 'GitHub',
  },
  {
    pattern: /https:\/\/(twitter|x).com\/(.*)/,
    icon: <SiX />,
    title: 'X',
  },
  {
    icon: <SiFacebook />,
    title: 'Facebook',
    pattern: /https:\/\/facebook.com\/(.*)/,
  },
  {
    icon: <SiLinkedin />,
    title: 'LinkedIn',
    pattern: /https:\/\/linkedin.com\/(.*)/,
  },
  {
    icon: <SiLine />,
    title: 'Line',
    pattern: /https:\/\/line.me\/(.*)/,
  },
  {
    pattern: /mailto:(.+)/,
    icon: <Mail />,
    title: 'Email',
  },
  {
    pattern: /tel:(.+)/,
    title: 'Tel',
    icon: <Phone />,
  },
  {
    pattern: /https:\/\/(.*)\.com\/(.*)/,
    icon: <Globe2 />,
    title: 'link',
  },
  {
    pattern: /https:\/\/zenn.dev\/(.*)/,
    icon: <SiZenn />,
    title: 'Zenn',
  },
];

export default function IconLink({
  href,
  showLabel,
}: {
  href: string;
  showLabel?: true;
}) {
  const matched = useMemo(
    () => patterns.find((pattern) => href.match(pattern.pattern)),
    [href]
  );

  return (
    <Button
      asChild
      size={showLabel ? 'sm' : 'icon'}
      variant={showLabel ? 'outline' : 'outline'}
      className={showLabel ? 'flex justify-start items-center gap-2' : ''}
    >
      <a href={href} target="_blank">
        <Slot className="text-muted-foreground size-4">
          {matched?.icon || <Globe2 />}
        </Slot>

        {showLabel && href.replace(/mailto:|tel:/, '')}
      </a>
    </Button>
  );
}
