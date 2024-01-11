'use client';

import { Button } from '@/app/components/ui/button';
import { Printer } from 'lucide-react';
import React from 'react';

export default function PrintButton() {
  return (
    <Button
      onClick={() => {
        window.print();
      }}
      size="icon"
      className="rounded-full"
      variant="ghost"
    >
      <Printer size={18} />
    </Button>
  );
}
