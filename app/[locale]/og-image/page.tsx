import { getData } from '@/data';
import { getStaticParams } from '@/locales/server';
import { Globe } from 'lucide-react';
import { setStaticParamsLocale } from 'next-international/server';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React from 'react';

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
        className="flex items-center aspect-video h-[320px] px-16 gap-6"
      >
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
    </div>
  );
}

export function generateStaticParams() {
  return getStaticParams();
}
