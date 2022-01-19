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
      {text: 'I want to design', tags: ['topic:design'], nextQuestionId: 'q4'},
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
      // {text: 'Software', tags: ['creation:software'], nextQuestionId: 'q6'}
    ],
    multiselect: false
  },
  {
    id: 'q3',
    text: 'What website features do you want to code?',
    answers: [
      // {text: 'I\'m not sure yet', tags: ['topic:code']},
      {
        text: 'Just the basics',
        tags: ['website-feature:basic']
      },
      {
        text: 'Sleek animations',
        tags: ['website-feature:animations']
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
        text: 'Artistic effects',
        tags: ['website-feature:creative-coding']
      },
      {
        text: 'Back-end databases',
        tags: ['website-feature:back-end']
      },
      {
        text: 'Data visualization',
        tags: ['website-feature:data-viz']
      },
      {text: '3D effects', tags: ['website-feature:3D']}
    ],
    multiselect: false
  },
  {
    id: 'q4',
    text: 'What do you want to design?',
    answers: [
      {text: 'Art & illustrations', tags: ['creation:art']},
      {
        text: 'User experiences',
        tags: ['creation:UX']
      },
      {text: 'User interfaces', tags: ['creation:UI']},
      {text: 'Branding', tags: ['creation:branding']},
      {text: 'Instagram filters', tags: ['creation:3D']}
    ],
    multiselect: false
  }
]
