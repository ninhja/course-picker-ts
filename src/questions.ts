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
      {text: 'I want to code', tags: ['topic:code'], nextQuestionId: 'q2'},
      {text: 'I want to design', tags: ['topic:design'], nextQuestionId: 'q5'},
      {
        text: 'I want to manage teams and projects',
        tags: ['topic:project-management']
      }
    ],
    multiselect: false
  },
  {
    id: 'q2',
    text: 'What do you want to code?',
    answers: [
      {text: 'Websites', tags: ['creation:website'], nextQuestionId: 'q3'},
      {text: 'Mobile apps', tags: ['creation:app']}
    ],
    multiselect: false
  },
  {
    id: 'q3',
    text: 'What website features do you want to code?',
    answers: [
      {
        text: 'Just the basics',
        tags: ['website-feature:basic']
      },
      {
        text: 'Cool visual effects',
        tags: [],
        nextQuestionId: 'q4'
      },
      {
        text: 'Online payments',
        tags: ['website-feature:e-commerce']
      },
      {
        text: 'Content management systems',
        tags: ['website-feature:CMS']
      },

      {
        text: 'Back-end databases',
        tags: ['website-feature:back-end']
      },
      {
        text: 'Data visualization',
        tags: ['website-feature:data-viz']
      }
    ],
    multiselect: false
  },
  {
    id: 'q4',
    text: 'What kinds of visuals do you want to code?',
    answers: [
      {
        text: 'Sleek animations & interactions',
        tags: ['website-feature:animations']
      },
      {
        text: '3D effects',
        tags: ['website-feature:3D']
      },

      {
        text: 'Animated typography',
        tags: ['website-feature:typography']
      },
      {
        text: 'Experimental & artistic effects',
        tags: ['website-feature:creative-coding']
      }
    ],
    multiselect: false
  },
  {
    id: 'q5',
    text: 'What do you want to design?',
    answers: [
      {text: 'Art & illustrations', tags: ['creation:art']},
      {
        text: 'User experiences',
        tags: ['creation:UX']
      },
      {text: 'User interfaces', tags: ['creation:UI']},
      {text: 'Branding', tags: ['creation:graphics']},
      {text: 'Instagram filters', tags: ['creation:3D']}
    ],
    multiselect: false
  },
  {
    id: 'q6',
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
  }
]
