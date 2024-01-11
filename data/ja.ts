import { getAssetPath } from '@/app/lib/utils';
import { Data } from '@/types/data';
import { SiGithub, SiX } from '@icons-pack/react-simple-icons';
import { Calendar, Mail, Send } from 'lucide-react';

const data: Data = {
  name: '山田 太郎',
  globalName: 'Taro Yamada',
  lastUpdatedAt: new Date(),
  status: {
    color: 'active',
    label: '転職活動中',
  },
  location: '東京都',
  bio: 'App Developer',
  summary:
    '私は情熱的なWebエンジニアで、ユーザー中心のインタラクティブなウェブサイトとアプリケーションの開発に特化しています。最新の技術トレンドを追い続け、クライアントのビジョンを実現するために、革新的で効率的なソリューションを提供することに力を入れています。チームワークとコミュニケーションを重視し、常にクオリティの高い作業を心がけています。趣味はプログラミング、読書、旅行です。',
  avatarUrl: getAssetPath() + '/locale/ja/profile.webp',
  skills: ['Next.js', 'Tailwind CSS', 'TypeScript'],
  education: [
    {
      school: '星海国際大学',
      degree: 'マスター号 コンピュータサイエンス',
      start: '2016',
      end: '2018',
    },
    {
      school: '北光テクノロジー学院',
      degree: '学士号 情報技術',
      start: '2012',
      end: '2016',
    },
  ],
  work: [
    {
      company: '株式会社ブルーテック',
      link: 'https://www.jmdp.or.jp',
      badges: ['正社員'],
      title: 'リードソフトウェアエンジニア',
      start: '2020',
      end: '現在',
      description:
        'チームを率いて新しいクラウドベースのソリューションを開発。効率的なワークフローを構築し、AWSを使用したスケーラブルなアプリケーションの設計と実装を行う。技術: Python, Django, React, AWS',
    },
    {
      company: 'グリーンデータ株式会社',
      link: 'https://www.jmdp.or.jp',
      badges: ['業務委託'],
      title: 'データサイエンティスト',
      start: '2020',
      end: '2019',
      description:
        'ビッグデータを活用して意思決定を支援する分析ツールの開発に貢献。機械学習とデータビジュアライゼーションを駆使して、顧客のビジネス成長を促進。技術: Python, R, SQL, Tableau',
    },
    {
      company: 'サイバーセキュリティソリューションズ',
      link: 'https://www.jmdp.or.jp',
      badges: [],
      title: 'シニアセキュリティエンジニア',
      start: '2018',
      end: '2017',
      description:
        '企業のサイバーセキュリティを強化するための戦略の立案と実装。最先端の脅威検出ツールの開発に携わり、クライアントのデータ保護を確保。技術: Java, Python, Linux, ネットワークセキュリティ',
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
      label: 'DMする',
      href: 'https://twitter.com/JMDP1789',
      icon: SiX,
      toolbar: true,
    },
    {
      label: 'オンラインミーティング',
      href: 'https://cal.com',
      icon: Calendar,
    },
    {
      label: 'フォーム',
      href: 'https://tally.so',
      icon: Send,
    },
  ],
  links: [
    {
      label: 'XXX',
      href: 'https://twitter.com/JMDP1789',
      icon: SiX,
    },
    {
      label: 'XXX',
      href: 'https://twitter.com/JMDP1789',
      icon: SiGithub,
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
        href: 'https://www.jmdp.or.jp',
      },
    },
    {
      title: 'CodeCollab',
      techStack: ['Side Project', 'Python', 'Flask', 'WebSocket', 'Docker'],
      description:
        'A real-time collaborative coding platform for remote pair programming',
      link: {
        label: 'codecollab.io',
        href: 'https://www.jmdp.or.jp',
      },
    },
  ],
};

export default data;
