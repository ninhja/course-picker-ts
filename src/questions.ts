import {Tag} from './types'

type Answer = {
  text: string
  tags: Tag[]
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
    text: 'What do you want to create?',
    answers: [
      {text: 'Websites', tags: ['creation:website'], nextQuestionId: 'q2'},
      {text: 'Mobile apps', tags: ['creation:app'], nextQuestionId: 'q5'}
      // {text: 'Art', tags: ['creation:art'], nextQuestionId: 'q2'},
      // {
      //   text: 'Visual designs',
      //   tags: ['creation:visual-design'],
      //   nextQuestionId: 'q2'
      // }
      // {text: 'Software', tags: ['creation:software'], nextQuestionId: 'q2'}
    ],
    multiselect: false
  },
  {
    id: 'q2',
    text: 'That sounds like a great idea! How do you want to create websites?',
    answers: [
      {text: 'I want to code', tags: ['topic:code'], nextQuestionId: 'q3'},
      {text: 'I want to design', tags: ['topic:design'], nextQuestionId: 'q4'}
    ],
    multiselect: false
  },
  {
    id: 'q3',
    text: 'What website features do you want to learn to code?',
    answers: [
      // {text: 'I\'m not sure yet', tags: ['topic:code']},
      {
        text: 'Sleek animations and interactions',
        tags: ['website-feature:animations']
      },
      {
        text: 'E-commerce & online payments',
        tags: ['website-feature:e-commerce']
      },
      {
        text: 'Content management systems (CMS)',
        tags: ['website-feature:CMS']
      },
      {
        text: 'Experimental & artistic effects',
        tags: ['website-feature:creative-coding']
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
    text: 'What website features do you want to learn to design?',
    answers: [
      // {text: 'I\'m not sure yet', tags: ['topic:code']},
      {
        text: 'User experience',
        tags: ['website-feature:UX']
      },
      {text: 'User interface', tags: ['website-feature:UI']},
      {text: 'Branding', tags: ['website-feature:branding']}
    ],
    multiselect: false
  },
  {
    id: 'q5',
    text: 'That sounds like a great idea! How do you want to create apps?',
    answers: [
      {text: 'I want to code', tags: ['topic:code']},
      {text: 'I want to design', tags: ['topic:design']}
    ],
    multiselect: false
  }
]
