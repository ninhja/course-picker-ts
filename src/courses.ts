import {Tag} from './types'

type Course = {
  name: string
  tags: Tag[]
  prerequisites: Prerequisite[]
}

type Prerequisite =
  | 'Foundation HTML, CSS + Javascript'
  | 'Javascript for Designers'
  | 'Visual Design + Branding'
  | 'Intro to Python'

export const COURSES: Course[] = [
  {
    name: 'Foundation HTML, CSS + Javascript',
    tags: ['topic:code', 'creation:website'],
    prerequisites: []
    // length: 'long',
    // difficulty: 'beginner',
    // codeTopic: ['front-end'],
    // designTopic: ['web design'],
    // codingLanguage: ['HTML', 'CSS', 'Javascript'],
    // workingTopic: [],
    // library: [],
    // framework: [],
    // software: []
  },
  {
    name: 'Creative Coding',
    tags: [
      'topic:code',
      'creation:website',
      'website-feature:animations',
      'website-feature:creative-coding'
    ],
    prerequisites: []
    // topic: ['code'],
    // length: 'short',
    // difficulty: 'beginner',
    // creation: ['art', 'website'],
    // codeTopic: ['visuals'],
    // designTopic: [],
    // codingLanguage: ['Javascript'],
    // workingTopic: [],
    // library: ['Two.js'],
    // framework: [],
    // software: []
  },
  {
    name: 'Plan, Design + Code Your First Website',
    tags: ['topic:code', 'topic:design', 'creation:website'],
    prerequisites: []
    // topic: ['PM', 'code', 'design'],
    // length: 'short',
    // difficulty: 'beginner',
    // creation: ['website'],
    // codeTopic: [],
    // designTopic: ['UI design', 'UX design', 'web design'],
    // codingLanguage: ['CSS', 'HTML', 'Javascript', 'Swift'],
    // workingTopic: ['freelancing'],
    // library: [],
    // framework: [],
    // software: ['Figma']
  },
  {
    name: 'Intro to Python',
    // topic: ['code', 'data'],
    tags: ['topic:code'],
    prerequisites: []
    // length: 'short',
    // difficulty: 'beginner',
    // creation: ['art', 'game', 'website'],
    // codeTopic: ['data viz', 'visuals'],
    // designTopic: [],
    // codingLanguage: ['Python'],
    // workingTopic: [],
    // library: [],
    // framework: [],
    // software: ['Command Line']
  },
  {
    name: 'Plan, Design + Code Your First App',
    tags: ['topic:code', 'topic:design', 'creation:app'],
    prerequisites: []
    // topic: ['PM', 'code', 'design'],
    // length: 'medium',
    // difficulty: 'beginner',
    // creation: ['app', 'game'],
    // codeTopic: ['mobile'],
    // designTopic: ['UI design', 'UX design'],
    // codingLanguage: ['Swift'],
    // workingTopic: [],
    // library: [],
    // framework: [],
    // software: ['Figma']
  },
  {
    name: 'Animation for the Web',
    tags: ['topic:code', 'creation:website', 'website-feature:animations'],
    prerequisites: [
      'Foundation HTML, CSS + Javascript',
      'Javascript for Designers'
    ]
    // topic: ['code'],
    // length: 'short',
    // difficulty: 'beginner',
    // creation: ['website'],
    // codeTopic: ['interaction'],
    // designTopic: [],
    // codingLanguage: ['CSS', 'HTML', 'Javascript'],
    // workingTopic: [],
    // library: ['GreenSock'],
    // framework: [],
    // software: []
  },
  {
    name: 'Javascript for Designers',
    tags: ['topic:code', 'creation:website', 'website-feature:animations'],
    prerequisites: ['Foundation HTML, CSS + Javascript']
    // topic: ['code'],
    // length: 'short',
    // difficulty: 'intermediate',
    // creation: ['website'],
    // codeTopic: ['front-end'],
    // designTopic: [],
    // codingLanguage: ['CSS', 'HTML', 'Javascript'],
    // workingTopic: [],
    // library: [],
    // framework: [],
    // software: []
  },
  {
    name: 'Data Visualization + D3',
    tags: ['topic:code', 'creation:website', 'website-feature:data-viz'],
    prerequisites: [
      'Foundation HTML, CSS + Javascript',
      'Javascript for Designers'
    ]
    // topic: ['code', 'data'],
    // length: 'medium',
    // difficulty: 'intermediate',
    // creation: ['website'],
    // codeTopic: ['data viz'],
    // designTopic: [],
    // codingLanguage: ['CSS', 'HTML', 'Javascript'],
    // workingTopic: [],
    // library: ['D3.js'],
    // framework: [],
    // software: []
  },
  {
    name: 'Math for Creatives',
    tags: [
      'topic:code',
      'creation:website',
      'website-feature:animations',
      'website-feature:creative-coding'
    ],
    prerequisites: [
      'Foundation HTML, CSS + Javascript',
      'Javascript for Designers'
    ]
    // topic: ['code'],
    // length: 'short',
    // difficulty: 'intermediate',
    // creation: ['art', 'game', 'website'],
    // codeTopic: ['visuals'],
    // designTopic: [],
    // codingLanguage: ['CSS', 'HTML', 'Javascript'],
    // workingTopic: [],
    // library: ['P5.js'],
    // framework: [],
    // software: []
  },
  {
    name: 'Page Transitions',
    tags: ['topic:code', 'creation:website', 'website-feature:animations'],
    prerequisites: [
      'Foundation HTML, CSS + Javascript',
      'Javascript for Designers'
    ]
    // topic: ['code'],
    // length: 'short',
    // difficulty: 'intermediate',
    // creation: ['website'],
    // codeTopic: ['interaction'],
    // designTopic: [],
    // codingLanguage: ['CSS', 'HTML', 'Javascript'],
    // workingTopic: [],
    // library: ['Barba.js'],
    // framework: [],
    // software: []
  },
  {
    name: 'Experimental Javascript',
    tags: ['topic:code', 'creation:website', 'website-feature:creative-coding'],
    prerequisites: [
      'Foundation HTML, CSS + Javascript',
      'Javascript for Designers'
    ]
    // topic: ['code'],
    // length: 'short',
    // difficulty: 'intermediate',
    // creation: ['art', 'game', 'website'],
    // codeTopic: ['interaction'],
    // designTopic: [],
    // codingLanguage: ['CSS', 'HTML', 'Javascript'],
    // workingTopic: [],
    // library: ['Matter.js', 'Pixi.js', 'Three.js'],
    // framework: [],
    // software: []
  },

  {
    name: 'Visual Design + Branding',
    tags: [
      'topic:design',
      'creation:website',
      'website-feature:UI',
      'website-feature:branding'
    ],
    prerequisites: []
    //   topic: ['design'],
    //   length: 'long',
    //   difficulty: 'beginner',
    //   creation: ['app', 'art', 'website'],
    //   codeTopic: [],
    //   designTopic: ['UI design', 'UX design', 'graphic design', 'web design'],
    //   codingLanguage: [],
    //   workingTopic: [],
    //   library: [],
    //   framework: [],
    //   software: ['Figma']
  },
  {
    name: 'Crypto + Web 3 for Creatives',
    tags: ['topic:code', 'creation:website', 'website-feature:e-commerce'],
    prerequisites: [
      'Foundation HTML, CSS + Javascript',
      'Javascript for Designers'
    ]
    //   topic: ['code'],
    //   length: 'medium',
    //   difficulty: 'intermediate',
    //   creation: ['art', 'website'],
    //   codeTopic: ['e-commerce'],
    //   designTopic: [],
    //   codingLanguage: ['CSS', 'HTML', 'Javascript'],
    //   workingTopic: [],
    //   library: [],
    //   framework: ['React.js'],
    //   software: ['Command Line']
  },
  {
    name: 'Shopify Theme Development',
    tags: ['topic:code', 'creation:website', 'website-feature:e-commerce'],
    prerequisites: [
      'Foundation HTML, CSS + Javascript',
      'Javascript for Designers'
    ]
    //   topic: ['code'],
    //   length: 'medium',
    //   difficulty: 'advanced',
    //   creation: ['website'],
    //   codeTopic: ['e-commerce'],
    //   designTopic: [],
    //   codingLanguage: ['CSS', 'HTML', 'Javascript', 'Liquid'],
    //   workingTopic: [],
    //   library: [],
    //   framework: [],
    //   software: ['Command Line']
  },
  {
    name: 'Intro to User Experience Design',
    tags: [
      'website-feature:UX',
      'creation:app',
      'topic:design',
      'creation:website'
    ],
    prerequisites: ['Visual Design + Branding']
    //   topic: ['design'],
    //   length: 'short',
    //   difficulty: 'intermediate',
    //   creation: ['app', 'website'],
    //   codeTopic: [],
    //   designTopic: ['UI design', 'UX design', 'web design'],
    //   codingLanguage: [],
    //   workingTopic: [],
    //   library: [],
    //   framework: [],
    //   software: ['Figma']
  },
  {
    name: 'Intro to User Interface Design',
    tags: [
      'website-feature:UI',
      'creation:app',
      'topic:design',
      'creation:website'
    ],
    prerequisites: ['Visual Design + Branding']
    //   topic: ['design'],
    //   length: 'short',
    //   difficulty: 'intermediate',
    //   creation: ['app', 'website'],
    //   codeTopic: [],
    //   designTopic: ['UI design', 'web design'],
    //   codingLanguage: [],
    //   workingTopic: [],
    //   library: [],
    //   framework: [],
    //   software: ['Figma']
  },
  {
    name: 'Experimental Typography For The Web',
    tags: ['topic:code', 'creation:website', 'website-feature:creative-coding'],
    prerequisites: [
      'Foundation HTML, CSS + Javascript',
      'Javascript for Designers'
    ]
    //   topic: ['code'],
    //   length: 'short',
    //   difficulty: 'intermediate',
    //   creation: ['art', 'website'],
    //   codeTopic: ['visuals'],
    //   designTopic: [],
    //   codingLanguage: ['CSS', 'HTML', 'Javascript'],
    //   workingTopic: [],
    //   library: ['P5.js'],
    //   framework: [],
    //   software: []
  },
  {
    name: 'Python for the Web',
    tags: ['topic:code', 'creation:website', 'website-feature:CMS'],
    prerequisites: [
      'Foundation HTML, CSS + Javascript',
      'Javascript for Designers',
      'Intro to Python'
    ]
    //   topic: ['code'],
    //   length: 'short',
    //   difficulty: 'intermediate',
    //   creation: ['website'],
    //   codeTopic: ['CMS'],
    //   designTopic: [],
    //   codingLanguage: ['CSS', 'HTML', 'Javascript', 'Python'],
    //   workingTopic: [],
    //   library: [],
    //   framework: ['Django'],
    //   software: ['Command Line']
  },
  {
    name: 'WordPress',
    tags: ['topic:code', 'creation:website', 'website-feature:CMS'],
    prerequisites: ['Foundation HTML, CSS + Javascript']
    //   topic: ['code'],
    //   length: 'long',
    //   difficulty: 'advanced',
    //   creation: ['website'],
    //   codeTopic: ['CMS'],
    //   designTopic: [],
    //   codingLanguage: ['CSS', 'HTML', 'PHP'],
    //   workingTopic: [],
    //   library: [],
    //   framework: [],
    //   software: []
  },
  {
    name: 'Command Line for Creatives',
    tags: ['topic:code', 'creation:website', 'website-feature:back-end'],
    prerequisites: ['Foundation HTML, CSS + Javascript']
    //   topic: ['code'],
    //   length: 'short',
    //   difficulty: 'advanced',
    //   creation: ['game', 'software', 'website'],
    //   codeTopic: ['back-end', 'front-end'],
    //   designTopic: [],
    //   codingLanguage: [],
    //   workingTopic: [],
    //   library: [],
    //   framework: [],
    //   software: ['Command Line']
  },
  {
    name: 'Ruby on Rails',
    tags: ['topic:code', 'creation:website', 'website-feature:back-end'],
    prerequisites: [
      'Foundation HTML, CSS + Javascript',
      'Javascript for Designers'
    ]
    //   topic: ['code'],
    //   length: 'long',
    //   difficulty: 'advanced',
    //   creation: ['website'],
    //   codeTopic: ['back-end'],
    //   designTopic: [],
    //   codingLanguage: ['Ruby'],
    //   workingTopic: [],
    //   library: [],
    //   framework: ['Rails'],
    //   software: ['Command Line']
  },
  {
    name: 'Advanced CSS + Javascript',
    tags: ['topic:code', 'creation:website', 'website-feature:animations'],
    prerequisites: [
      'Foundation HTML, CSS + Javascript',
      'Javascript for Designers'
    ]
    //   topic: ['code'],
    //   length: 'medium',
    //   difficulty: 'advanced',
    //   creation: ['website'],
    //   codeTopic: ['front-end'],
    //   designTopic: [],
    //   codingLanguage: ['CSS', 'HTML', 'Javascript'],
    //   workingTopic: [],
    //   library: [],
    //   framework: [],
    //   software: []
  },
  {
    name: 'Intro to React.js',
    tags: ['topic:code', 'creation:website'],
    prerequisites: [
      'Foundation HTML, CSS + Javascript',
      'Javascript for Designers'
    ]
    //   topic: ['code'],
    //   length: 'medium',
    //   difficulty: 'advanced',
    //   creation: ['website'],
    //   codeTopic: ['front-end'],
    //   designTopic: [],
    //   codingLanguage: ['CSS', 'HTML', 'Javascript'],
    //   workingTopic: [],
    //   library: [],
    //   framework: ['React.js'],
    //   software: ['Command Line']
  },
  {
    name: 'Ajax + APIs',
    tags: [
      'topic:code',
      'creation:website',
      'website-feature:CMS',
      'website-feature:back-end',
      'website-feature:data-viz'
    ],
    prerequisites: [
      'Foundation HTML, CSS + Javascript',
      'Javascript for Designers'
    ]
    //   topic: ['code'],
    //   length: 'short',
    //   difficulty: 'advanced',
    //   creation: ['website'],
    //   codeTopic: ['front-end'],
    //   designTopic: [],
    //   codingLanguage: ['CSS', 'HTML', 'Javascript'],
    //   workingTopic: [],
    //   library: [],
    //   framework: [],
    //   software: []
  },
  {
    name: 'Shaders for the Web',
    tags: ['topic:code', 'creation:website', 'website-feature:creative-coding'],
    prerequisites: [
      'Foundation HTML, CSS + Javascript',
      'Javascript for Designers'
    ]
    //   topic: ['code'],
    //   length: 'short',
    //   difficulty: 'advanced',
    //   creation: ['art', 'website'],
    //   codeTopic: ['visuals'],
    //   designTopic: [],
    //   codingLanguage: ['CSS', 'GLSL', 'HTML', 'Javascript'],
    //   workingTopic: [],
    //   library: ['Three.js'],
    //   framework: [],
    //   software: []
  },
  {
    name: 'Digital Project Management',
    tags: ['topic:project-management'],
    prerequisites: []
    //   topic: ['PM'],
    //   length: 'long',
    //   difficulty: 'beginner',
    //   creation: [],
    //   codeTopic: [],
    //   designTopic: [],
    //   codingLanguage: [],
    //   workingTopic: ['freelancing', 'project management'],
    //   library: [],
    //   framework: [],
    //   software: ['Notion']
  },
  {
    name: 'Instagram Filters + Spark AR',
    tags: ['topic:design'],
    prerequisites: []
    //   topic: ['design'],
    //   length: 'short',
    //   difficulty: 'beginner',
    //   creation: ['AR / VR', 'art'],
    //   codeTopic: [],
    //   designTopic: ['3D design', 'AR / VR'],
    //   codingLanguage: [],
    //   workingTopic: [],
    //   library: [],
    //   framework: [],
    //   software: ['Spark AR']
  }
]
