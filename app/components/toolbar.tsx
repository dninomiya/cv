import { AppConfig } from '@/app.config';
import ContactButtons from '@/app/components/contact-buttons';
import { LocaleToggle } from '@/app/components/locale-toggle';
import { ModeToggle } from '@/app/components/mode-toggle';
import PrintButton from '@/app/components/print-button';
import Status from '@/app/components/status';
import { Separator } from '@/app/components/ui/separator';
import { Data } from '@/types/data';

export default function ToolBar({ data }: { data: Data }) {
  const noFeatures = Object.values(AppConfig.toolbar).every((value) =>
    !Boolean(value)
  );

  return (
    <div className="fixed flex *:shrink-0 items-center w-max shadow-lg backdrop-blur p-2 bottom-8 left-1/2 -translate-x-1/2 rounded-full bg-muted/10 border">
      {data.status && <Status status={data.status} />}
      <ContactButtons contacts={data.contacts} />
      {!noFeatures && (
        <div className="hidden lg:contents">
          <Separator orientation="vertical" className="h-8 mx-2" />
          {AppConfig.toolbar.locale && <LocaleToggle />}
          {AppConfig.toolbar.theme && <ModeToggle />}
          {AppConfig.toolbar.print && <PrintButton />}
        </div>
      )}
    </div>
  );
}
