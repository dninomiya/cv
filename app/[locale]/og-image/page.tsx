import { getData } from '@/data';
import { getStaticParams } from '@/locales/server';
import { setStaticParamsLocale } from 'next-international/server';
import Image from 'next/image';
import { redirect } from 'next/navigation';

export default function Page({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setStaticParamsLocale(locale);

  const data = getData();

  if (process.env.NODE_ENV !== 'development') {
    redirect('/' + locale);
  }

  return (
    <div className="flex items-center justify-center h-dvh">
      <div
        id="canvas"
        className="flex items-center aspect-video h-[640px] px-32 gap-12"
      >
        <div>
          <Image
            src={data.avatarUrl}
            alt=""
            width={240}
            height={240}
            className="rounded-xl"
          />
        </div>
        <div className="*:leading-none">
          {data.globalName && (
            <p className="text-2xl mb-4 text-muted-foreground">
              {data.globalName}
            </p>
          )}
          <h1 className="text-5xl mb-4 font-bold">{data.name}</h1>
          <p className="text-3xl text-muted-foreground">{data.bio}</p>
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return getStaticParams();
}
