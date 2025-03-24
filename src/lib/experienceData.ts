export interface ExperienceItem {
  id: number;
  type: 'work' | 'education' | 'certification' | 'achievement' | 'sabbatical';
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string | 'Present';
  description: string[];
  skills?: string[];
  logo?: string;
  companySummary?: string;
}

export const experiences: ExperienceItem[] = [
  {
    id: 1,
    type: 'education',
    title: 'Bachelor of Science in Mechanical Engineering',
    organization: 'University of Cape Town',
    location: 'South Africa',
    startDate: 'Jan 2008',
    endDate: 'Dec 2012',
    description: [
      'Mechanical Engineering degree with focus on design and manufacturing'
    ],
    logo: '/assets/uct_logo.png',
    companySummary: 'University of Cape Town is a prestigious institution in South Africa known for its academic excellence and research contributions.'
  },
  {
    id: 2,
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
    logo: '/assets/ma_logo.png',
    companySummary: 'Modality Apps develops hybrid mobile applications for businesses. This is where I began my coding journey with very little prior experience, learning on the job.'
  },
  {
    id: 3,
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
    logo: '/assets/stratech_logo.png',
    companySummary: 'Stratech provides contracted engineering work building fintech related solutions for clients.'
  },
  {
    id: 4,
    type: 'work',
    title: 'Specialist Support Engineer & Software Engineer',
    organization: 'Hotjar by ContentSquare',
    location: 'Fully Remote',
    startDate: 'Dec 2017',
    endDate: 'Mar 2021',
    description: [
      'Helped solve top tier customer issues and bugs.',
      'Helped improve the efficiency of the support team by building and improving internal tools.',
      'Communicated with the engineering teams to help them understand the needs of the support team and the customers.',
      'Worked on internal support tools including a React app, a chrome extension and Zendesk integration.',
      'Acted as interim team lead of the internal tools team for 4 months.'
    ],
    skills: ['React', 'Flask', 'Python', 'Chrome Extensions', 'Zednesk', 'REST APIs'],
    logo: '/assets/hotjar_logo.png',
    companySummary: 'At Hotjar I spent 1 year in the product team and then voluntarily moved to the support department to work on internal tools and solve customer issues.'
  },
  {
    id: 5,
    type: 'sabbatical',
    title: 'Career Break / Sabbatical',
    organization: '',
    location: 'South Africa',
    startDate: 'Mar 2021',
    endDate: 'Oct 2022',
    description: [
      'Spent time with my my wife and newborn son. My wife was very ill and bedbound for almost a year so I helped a lot with our son.',
      'Travelled in South Africa.',
      'Pursued hobbies.',
      'Learned new skills.'
    ],
    companySummary: 'A period of personal growth and family time, focusing on life outside of professional work.'
  },
  {
    id: 6,
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
    logo: '/assets/ghost_logo.png',
    companySummary: 'The Ghost Foundation is a non-profit organization that builds open-source publishing software, including the popular Ghost blogging platform.'
  },
  {
    id: 7,
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
    logo: '/assets/ewage.webp',
    companySummary: 'eWage is a small startup that provides digital payslips and leave management, allowing employees to access their information anytime and anywhere.'
  },
  {
    id: 8,
    type: 'work',
    title: 'Parenting / Startup Ventures',
    organization: 'Self Employed',
    location: 'South Africa',
    startDate: 'Feb 2024',
    endDate: 'Present',
    description: [
      'Worked on 2 different startups ideas.',
      'Made some money with my BitSwitch trading bot (see projects).',
      'Helped care for and educate our boys who we educate at home.'
    ],
    companySummary: 'A period focusing on family responsibilities while simultaneously exploring entrepreneurial opportunities through various startup ventures.'
  }
];
