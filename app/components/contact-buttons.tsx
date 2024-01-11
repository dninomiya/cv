import { Button } from '@/app/components/ui/button';
import { Contact } from '@/types/data';

export default function ContactButtons({ contacts }: { contacts: Contact[] }) {
  return (
    <>
      {contacts
        .filter((contact) => contact.toolbar)
        .map((contact) => (
          <Button
            size="icon"
            className="rounded-full"
            variant="ghost"
            key={contact.label}
            asChild
          >
            <a href={contact.href} target="_blank">
              <contact.icon size={18} />
              <span className="sr-only">{contact.label}</span>
            </a>
          </Button>
        ))}
    </>
  );
}
