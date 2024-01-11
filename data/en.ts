import { getAssetPath } from '@/app/lib/utils';
import { Data } from '@/types/data';
import { SiGithub, SiX } from '@icons-pack/react-simple-icons';
import { Calendar, Mail, Send } from 'lucide-react';

const data: Data = {
  name: 'Taro Yamada',
  lastUpdatedAt: new Date(),
  status: {
    color: 'active',
    label: 'Available',
  },
  location: 'Seattle, WA',
  bio: 'App Developer',
  summary:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. A laborum unde, ducimus iusto ipsum repudiandae reprehenderit adipisci obcaecati quia consequuntur rem velit ab itaque saepe! Amet deserunt illo in nesciunt!',
  avatarUrl: getAssetPath() + '/locale/en/profile.webp',
  skills: ['Next.js', 'Tailwind CSS', 'TypeScript'],
  education: [
    {
      school: 'Aurora Global University',
      degree: `Master's in Environmental Science`,
      start: '2019',
      end: '2021',
    },
    {
      school: 'Nova Arts and Technology College',
      degree: `Bachelor's in Digital Media Design`,
      start: '2014',
      end: '2018',
    },
  ],
  work: [
    {
      company: 'BlueTech Co., Ltd.',
      link: 'https://www.jmdp.or.jp',
      badges: ['Remote'],
      title: 'Lead Software Engineer',
      start: '2020',
      end: 'Present',
      description:
        'Leading a team to develop new cloud-based solutions. Building efficient workflows and designing and implementing scalable applications using AWS. Technologies: Python, Django, React, AWS',
    },
    {
      company: 'Green Data Co., Ltd.',
      link: 'https://www.jmdp.or.jp',
      badges: ['Remote'],
      title: 'Data Scientist',
      start: '2018',
      end: '2020',
      description: `Contributing to the development of analytical tools that leverage big data to aid decision-making. Utilizing machine learning and data visualization to foster clients' business growth. Technologies: Python, R, SQL, Tableau`,
    },
    {
      company: 'Cybersecurity Solutions',
      link: 'https://www.jmdp.or.jp',
      badges: [],
      title: 'Senior Security Engineer',
      start: '2017',
      end: '2018',
      description:
        'Developing and implementing strategies to strengthen corporate cybersecurity. Involved in the development of cutting-edge threat detection tools to secure client data. Technologies: Java, Python, Linux, Network Security',
    },
  ],
  contacts: [
    {
      label: 'example@example.com',
      href: 'mailto:example@example.com',
      icon: Mail,
      toolbar: true,
    },
    {
      label: 'Send DM',
      href: 'https://twitter.com/JMDP1789',
      icon: SiX,
      toolbar: true,
    },
    {
      label: 'Meeting',
      href: 'https://cal.com',
      icon: Calendar,
    },
    {
      label: 'Form',
      href: 'https://tally.so',
      icon: Send,
    },
  ],
  projects: [
    {
      title: 'EcoTrack',
      techStack: [
        'Side Project',
        'JavaScript',
        'React',
        'Node.js',
        'MongoDB',
        'REST API',
      ],
      description:
        'An environmental impact tracking app for individuals and small businesses',
      link: {
        label: 'ecotrack.app',
        href: 'https://ecotrack.app/',
      },
    },
    {
      title: 'CodeCollab',
      techStack: ['Side Project', 'Python', 'Flask', 'WebSocket', 'Docker'],
      description:
        'A real-time collaborative coding platform for remote pair programming',
      link: {
        label: 'codecollab.io',
        href: 'https://codecollab.io/',
      },
    },
  ],
  links: [
    {
      label: 'XXX',
      href: 'https://twitter.com/JMDP1789',
      icon: SiGithub,
    },
    {
      label: 'XXX',
      href: 'https://twitter.com/JMDP1789',
      icon: SiX,
    },
  ],
};

export default data;
