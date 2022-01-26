import {TagId} from './tags'

type Answer = {
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
        text: "I want to create something I'm proud of",
        tags: [],
        nextQuestionId: 'q2'
      },
      {
        text: 'I want to learn about a specific topic',
        tags: [],
        nextQuestionId: 'q7'
      },
      {
        text: 'I want to explore a career pathway',
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
      {text: 'I want to code', tags: ['topic:code'], nextQuestionId: 'q3'},
      {text: 'I want to design', tags: ['topic:design'], nextQuestionId: 'q6'}
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
        tags: ['topic:basic']
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
      {text: 'Branding', tags: ['topic:graphic-design']},
      {text: 'Instagram filters', tags: ['topic:3D']}
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
        nextQuestionId: 'q10'
      },
      {
        text: 'Working',
        tags: ['topic:project-management'],
        nextQuestionId: 'q11'
      }
    ],
    multiselect: false
  },
  {
    id: 'q8',
    text: 'Which coding topic do you want to learn about?',
    answers: [
      {
        text: 'I want to learn a specific coding language',
        tags: [],
        nextQuestionId: 'q9'
      },
      {
        text: 'Creative coding',
        tags: ['topic:creative-coding']
      },
      {
        text: 'Front-end web development',
        tags: []
      },
      {
        text: 'Back-end web development',
        tags: ['topic:back-end']
      },
      {
        text: 'Data visualization',
        tags: ['topic:data-viz']
      },
      {
        text: 'Crypto, web 3 & blockchain development',
        tags: ['topic:web3']
      },
      {
        text: 'Shopify',
        tags: ['topic:e-commerce']
      },
      {
        text: 'Content management systems (CMS)',
        tags: ['topic:CMS']
      },
      {
        text: 'iOS development',
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
      {text: 'Swift', tags: ['coding-language:swift']}
    ],
    multiselect: false
  },
  {
    id: 'q10',
    text: 'Which design topic do you want to learn about?',
    answers: [
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
    id: 'q11',
    text: 'Which working topic do you want to learn about?',
    answers: [
      {
        text: 'Project management',
        tags: ['topic:project-management']
      },
      {
        text: 'Job seeking',
        tags: ['topic:job-seeking']
      },
      {
        text: 'Freelancing',
        tags: ['topic:freelance']
      }
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
        text: 'Web 3 developer',
        tags: ['topic:web3']
      },
      {
        text: 'Shopify developer',
        tags: ['topic:e-commerce']
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
        tags: ['topic:UX', 'topic:project-management']
      }
    ],
    multiselect: false
  }
]
