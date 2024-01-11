import { Data } from '@/types/data';
import { Github, Mail } from 'lucide-react';

const data: Data = {
  name: '',
  lastUpdatedAt: new Date(),
  status: {
    color: 'active',
    label: '',
  },
  location: '',
  bio: '',
  summary: '',
  avatarUrl: '',
  skills: [],
  education: [
    {
      school: '',
      degree: '',
      start: '',
      end: '',
    },
    {
      school: '',
      degree: '',
      start: '',
      end: '',
    },
  ],
  work: [
    {
      company: '',
      link: '',
      badges: [],
      title: '',
      start: '',
      end: '',
      description: '',
    },
    {
      company: '',
      link: '',
      badges: [],
      title: '',
      start: '',
      end: '',
      description: '',
    },
    {
      company: '',
      link: '',
      badges: [],
      title: '',
      start: '',
      end: '',
      description: '',
    },
  ],
  contacts: [
    {
      label: '',
      href: '',
      icon: Mail,
      toolbar: true,
    },
  ],
  projects: [
    {
      title: '',
      techStack: [],
      description: '',
      link: {
        label: '',
        href: '',
      },
    },
  ],
  links: [
    {
      label: '',
      href: '',
      icon: Github,
    },
  ],
};

export default data;
