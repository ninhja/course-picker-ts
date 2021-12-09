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
      {text: 'Mobile apps', tags: ['creation:app'], nextQuestionId: 'q2'},
      {text: 'Art', tags: ['creation:art'], nextQuestionId: 'q2'},
      {
        text: 'Visual designs',
        tags: ['creation:visual-design'],
        nextQuestionId: 'q2'
      },
      {text: 'Software', tags: ['creation:software'], nextQuestionId: 'q2'}
    ],
    multiselect: false
  },

  {
    id: 'q2',
    text: 'That sounds like a great idea! How do you want to create ___?',
    answers: [
      {text: 'I want to code', tags: ['topic:code'], nextQuestionId: 'q3'},
      {text: 'I want to design', tags: ['topic:design'], nextQuestionId: 'q3'}
    ],
    multiselect: false
  },

  {
    id: 'q3',
    text: 'What website features do you want to learn to code?',
    answers: [
      // {text: 'I\'m not sure yet', tags: ['topic:code']},
      {
        text: 'Animations and interactions',
        tags: ['website-features:animations']
      },
      {text: 'Ecommerce', tags: ['website-features:ecommerce']}
    ],
    multiselect: false
  }
]
