export interface ExperienceItem {
  id: number;
  type: 'work' | 'education' | 'certification' | 'achievement';
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string | 'Present';
  description: string[];
  skills?: string[];
  logo?: string;
}

export const experiences: ExperienceItem[] = [
  {
    id: 1,
    type: 'work',
    title: 'Founding Engineer',
    organization: 'Ewage',
    location: 'Port Elizabeth, South Africa',
    startDate: 'Jan 2022',
    endDate: 'Feb 2024',
    description: [
      'A founding member, principal engineer and a director of the company.',
      'Scratch built the application using tools like React, Django, and PostgreSQL.',
      'Hosted on AWS EC2 using Docker as well as other tools like S3 and RDS (Postgres).'
    ],
    skills: ['React', 'Django', 'PostgreSQL', 'AWS', 'Docker', 'S3', 'RDS'],
    logo: '/src/assets/ewage.webp'
  },
  {
    id: 2,
    type: 'work',
    title: 'Software Engineer',
    organization: 'Ghost',
    location: 'Remote (Singapore Based)',
    startDate: 'Oct 2022',
    endDate: 'Dec 2022',
    description: [
      'Built a React app to replace a CLI tool that the support team uses to manage users and accounts etc.',
      'This was a 3 month project-based contract to build an internal tool for the Ghost team.'
    ],
    skills: ['React', 'JavaScript', 'Node.js'],
    logo: '/src/assets/ghost_logo.png'
  },
  {
    id: 3,
    type: 'work',
    title: 'Career Break / Sabbatical',
    organization: '',
    location: 'South Africa',
    startDate: 'Mar 2021',
    endDate: 'Oct 2022',
    description: [
      'Spent time with my my wife and (at the time) newborn son.',
      'Travelled in South Africa.',
      'Pursued hobbies.',
      'Learned new skills.'
    ]
  },
  {
    id: 4,
    type: 'work',
    title: 'Software Engineer',
    organization: 'Hotjar by ContentSquare',
    location: 'Remote (Malta Based)',
    startDate: 'Dec 2017',
    endDate: 'Mar 2021',
    description: [
      'Worked primary on internal support tools including a React app, a chrome extension and other integrations.',
      'Built and maintained Rest APIs in Flask.',
      'Was an interim-team lead for 4 months.',
      'Mentored more junior engineers in my own team and in the support department.',
      'Progressed well on the on internal development track and earned title of "Specialist" in my area.'
    ],
    skills: ['React', 'Flask', 'Python', 'Chrome Extensions', 'REST APIs'],
    logo: '/src/assets/hotjar_logo.png'
  },
  {
    id: 5,
    type: 'work',
    title: 'Software Engineer',
    organization: 'Stratech',
    location: 'Remote (South Africa Based)',
    startDate: 'Nov 2016',
    endDate: 'Oct 2017',
    description: [
      'Lead backend developer on several diverse projects in the fintech space.',
      'Systems architecture and planning.',
      'Front end developer on hybrid mobile applications using Ionic.'
    ],
    skills: ['Ionic', 'Mobile Development', 'Backend Development', 'System Architecture'],
    logo: '/src/assets/stratech_logo.png'
  },
  {
    id: 6,
    type: 'work',
    title: 'Junior Software Engineer',
    organization: 'Modality Apps',
    location: '50% Remote (South Africa Based)',
    startDate: 'Mar 2015',
    endDate: 'Oct 2016',
    description: [
      'Primary full-stack developer on web apps to provide "back office" interfaces for hybrid mobile apps.',
      'Managed and setup all the infrastructure (small scale) in AWS.',
      'This is where I jumped in the deep end and learned how to code on the job.'
    ],
    skills: ['Full Stack Development', 'AWS', 'Mobile Development'],
    logo: '/src/assets/ma_logo.png'
  },
  {
    id: 7,
    type: 'education',
    title: 'Bachelor of Science in Mechanical Engineering',
    organization: 'University of Cape Town',
    location: 'South Africa',
    startDate: 'Jan 2008',
    endDate: 'Dec 2012',
    description: [
      'Mechanical Engineering degree with focus on design and manufacturing'
    ],
    logo: '/src/assets/uct_logo.png'
  }
];
