import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Forbin Capital', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Forbin Capital', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Break into algorithmic trading and compete for capital',
  name: 'Forbin Capital',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile-3.png',
  paragraphOne:
    'Forbin Capital is a quantitative investment management company. We combine advanced machine learning techniques with financial expertise to generate profitable trading systems.',
  paragraphTwo:
    'Forbin Capital hosts quantitative trading contests and allocates to winning algorithms.',
  paragraphThree:
    'Each contest includes two phases: the submission period and the live contest period. During the submission period, you can develop systems, check their performance, and make changes to them. During the live contest period, we will check the performance of the submitted systems and at the end, we will announce the winners.',
  resume: 'https://www.iasg.com/en-us/groups/group/forbin-capital/program/forbin', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    buttonTitle: 'Download datasets',
    img: 'project-1.png',
    title: 'Start with hedge fund quality data',
    info: 'It is clean and regularized, designed to be usable right away.',
    info2: '',
    url: 'https://docs.forbin-capital.com/user-guide/data',
    repo: null, // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    buttonTitle: 'Clone examples',
    img: 'project-2.png',
    title: 'Apply machine learning to predict the stock market',
    info: 'Build a model using the example Python scripts. Everything you need to get started in one script.',
    info2: '',
    url: 'https://docs.forbin-capital.com/user-guide/code',
    repo: null, // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    buttonTitle: 'Submit predictions',
    img: 'project-3.png',
    title: 'Submit your predictions to a money prize',
    info: 'Build reputation to claim your place on the leaderboard. $15000 money prize.',
    info2: '',
    url: 'https://docs.forbin-capital.com/user-guide/evaluation',
    repo: null, // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'investors@forbin-capital.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/forbincapital',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/company/forbin-capital',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/forbin-capital',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
