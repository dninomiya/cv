'use client';

import { useChangeLocale, useCurrentLocale, useI18n } from '@/locales/client';
import { Languages } from 'lucide-react';

import { Button } from '@/app/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/app/components/ui/dropdown-menu';
import { AppConfig } from '@/app.config';

export function LocaleToggle() {
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();
  const t = useI18n();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="rounded-full uppercase">
          <Languages size={16} className="mr-2" />
          {locale}
          <span className="sr-only">{t('toggleLocale')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {AppConfig.locales.map((locale) => (
          <DropdownMenuItem
            key={locale.id}
            onClick={() => changeLocale(locale.id)}
          >
            {locale.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
