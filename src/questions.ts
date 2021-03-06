import {TagId} from './tags'

export type Answer = {
  text: string
  tags: TagId[]
  nextQuestionId?: string
}

type Question = {
  id: string
  text: string
  answers: Answer[]
  multiselect: boolean
}

export const QUESTIONS: Question[] = [
  {
    id: 'q1',
    text: 'What do you want to do?',
    answers: [
      {
        text: "Create something I'm proud of",
        tags: [],
        nextQuestionId: 'q2'
      },
      {
        text: 'Learn about a specific topic',
        tags: [],
        nextQuestionId: 'q7'
      },
      {
        text: 'Explore a career pathway',
        tags: [],
        nextQuestionId: 'q13'
      }
    ],
    multiselect: false
  },
  {
    id: 'q2',
    text: 'How do you want to create?',
    answers: [
      {text: 'Code', tags: ['topic:code'], nextQuestionId: 'q3'},
      {text: 'Design', tags: ['topic:design'], nextQuestionId: 'q6'}
    ],
    multiselect: false
  },
  {
    id: 'q3',
    text: 'What do you want to code?',
    answers: [
      {text: 'Websites', tags: ['topic:website'], nextQuestionId: 'q4'},
      {text: 'Mobile apps', tags: ['topic:app']}
    ],
    multiselect: false
  },
  {
    id: 'q4',
    text: 'What website features do you want to code?',
    answers: [
      {
        text: 'Just the basics',
        tags: ['coding-language:HTML', 'coding-language:CSS']
      },
      {
        text: 'Cool visual effects',
        tags: [],
        nextQuestionId: 'q5'
      },
      {
        text: 'Online payments',
        tags: ['topic:e-commerce']
      },
      {
        text: 'Content management systems',
        tags: ['topic:CMS']
      },
      {
        text: 'Back-end databases',
        tags: ['topic:back-end']
      },
      {
        text: 'Data visualization',
        tags: ['topic:data-viz']
      }
    ],
    multiselect: false
  },
  {
    id: 'q5',
    text: 'What kinds of visuals do you want to code?',
    answers: [
      {
        text: 'Sleek animations & interactions',
        tags: ['topic:animation']
      },
      {
        text: '3D effects',
        tags: ['topic:3D']
      },

      {
        text: 'Animated typography',
        tags: ['topic:typography']
      },
      {
        text: 'Experimental & artistic effects',
        tags: ['topic:creative-coding']
      }
    ],
    multiselect: false
  },
  {
    id: 'q6',
    text: 'What do you want to design?',
    answers: [
      {text: 'Art & illustrations', tags: ['topic:art']},
      {
        text: 'User experiences',
        tags: ['topic:UX']
      },
      {text: 'User interfaces', tags: ['topic:UI']},
      {text: 'Graphic design & branding', tags: ['topic:graphic-design']},
      {text: 'Instagram filters', tags: ['design-tool:sparkAR']}
    ],
    multiselect: false
  },
  {
    id: 'q7',
    text: 'What area are you interested in?',
    answers: [
      {
        text: 'Code',
        tags: ['topic:code'],
        nextQuestionId: 'q8'
      },
      {
        text: 'Design',
        tags: ['topic:design'],
        nextQuestionId: 'q12'
      },
      {
        text: 'Project management',
        tags: ['topic:project-management']
      }
    ],
    multiselect: false
  },
  {
    id: 'q8',
    text: 'Which coding topic do you want to learn about?',
    answers: [
      {
        text: 'A coding language',
        tags: [],
        nextQuestionId: 'q9'
      },
      {
        text: 'A Javascript library',
        tags: ['coding-language:JS'],
        nextQuestionId: 'q16'
      },
      {
        text: 'A coding tool',
        tags: [],
        nextQuestionId: 'q10'
      },
      {
        text: 'Web development',
        tags: ['topic:web-dev'],
        nextQuestionId: 'q11'
      },
      {
        text: 'Creative coding',
        tags: ['topic:creative-coding']
      },

      {
        text: 'Data visualization',
        tags: ['topic:data-viz']
      },
      {
        text: 'Crypto, web 3 & the blockchain',
        tags: ['topic:web3']
      },
      {
        text: 'E-commerce',
        tags: ['topic:e-commerce']
      },
      {
        text: 'Mobile app development',
        tags: ['topic:app']
      }
    ],
    multiselect: false
  },
  {
    id: 'q9',
    text: 'What coding language do you want to learn?',
    answers: [
      {
        text: 'HTML & CSS',
        tags: ['coding-language:HTML', 'coding-language:CSS']
      },
      {text: 'Javascript', tags: ['coding-language:JS']},
      {text: 'Python', tags: ['coding-language:python']},
      {text: 'Ruby on Rails', tags: ['coding-language:ruby-on-rails']},
      {text: 'Swift', tags: ['coding-language:swift']},
      {text: 'GLSL & WebGL', tags: ['coding-language:GLSL']}
    ],
    multiselect: false
  },
  {
    id: 'q10',
    text: 'What coding tool do you want to learn about?',
    answers: [
      {
        text: 'Shopify',
        tags: ['coding-tool:shopify']
      },
      {
        text: 'The command line',
        tags: ['coding-tool:command-line']
      },
      {
        text: 'Wordpress',
        tags: ['coding-tool:wordpress']
      },
      {
        text: 'Webpack',
        tags: ['coding-tool:webpack']
      },
      {
        text: 'Django',
        tags: ['coding-tool:django']
      }
    ],
    multiselect: false
  },
  {
    id: 'q11',
    text: 'What area of web development do you want to learn about?',
    answers: [
      {
        text: 'Front-end web development',
        tags: ['topic:front-end']
      },
      {
        text: 'Back-end web development',
        tags: ['topic:back-end']
      },
      {
        text: 'Full-stack web development',
        tags: []
      }
    ],
    multiselect: false
  },
  {
    id: 'q12',
    text: 'Which design topic do you want to learn about?',
    answers: [
      {text: 'A specific design tool', tags: [], nextQuestionId: 'q17'},
      {
        text: 'User experience design',
        tags: ['topic:UX']
      },
      {text: 'User interface design', tags: ['topic:UI']},
      {text: 'Graphic design', tags: ['topic:graphic-design']},
      {text: 'Augmented reality', tags: ['topic:3D']},
      {text: 'Branding & marketing design', tags: []}
    ],
    multiselect: false
  },
  {
    id: 'q13',
    text: 'Which kind of career pathway do you want to explore?',
    answers: [
      {
        text: 'Code',
        tags: ['topic:code'],
        nextQuestionId: 'q14'
      },
      {
        text: 'Design',
        tags: ['topic:design'],
        nextQuestionId: 'q15'
      },
      {
        text: 'Project management',
        tags: ['topic:project-management']
      }
    ],
    multiselect: false
  },
  {
    id: 'q14',
    text: 'Which coding career pathway do you want to explore?',
    answers: [
      {
        text: 'Front-end web developer',
        tags: ['topic:front-end']
      },
      {
        text: 'Back-end web developer',
        tags: ['topic:back-end']
      },
      {
        text: 'Full-stack web developer',
        tags: ['topic:web-dev']
      },
      {
        text: 'Web 3 developer',
        tags: ['topic:web3']
      },
      {
        text: 'Shopify developer',
        tags: ['coding-tool:shopify']
      },
      {
        text: 'Wordpress developer',
        tags: ['topic:CMS']
      }
    ],
    multiselect: false
  },
  {
    id: 'q15',
    text: 'Which design career pathway do you want to explore?',
    answers: [
      {
        text: 'UI / UX / Product designer',
        tags: ['topic:UI', 'topic:UX']
      },
      {
        text: 'Graphic / Visual / Marketing designer',
        tags: ['topic:graphic-design']
      },
      {
        text: 'User researcher',
        tags: ['topic:UX']
      }
    ],
    multiselect: false
  },
  {
    id: 'q16',
    text: 'Which Javascript library do you want to learn about?',
    answers: [
      {
        text: 'React.js',
        tags: ['coding-tool:react']
      },
      {
        text: 'GSAP',
        tags: ['coding-tool:GSAP']
      },
      {
        text: 'Three.js',
        tags: ['coding-tool:three.js']
      },
      {
        text: 'web3.js',
        tags: ['coding-tool:web3.js']
      },

      {
        text: 'p5.js',
        tags: ['coding-tool:p5.js']
      },
      {
        text: 'Barba.js',
        tags: ['coding-tool:barba.js']
      }
    ],
    multiselect: false
  },
  {
    id: 'q17',
    text: 'Which design tool do you want to learn about?',
    answers: [
      {
        text: 'Figma',
        tags: ['design-tool:figma']
      },
      {
        text: 'Spark AR',
        tags: ['design-tool:sparkAR']
      }
    ],
    multiselect: false
  }
]
