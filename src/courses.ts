import {Tag} from './types'

type Course = {
  // id: string
  name: string
  tags: Tag[]
}

export const COURSES: Course[] = [
  {
    name: 'Foundation HTML, CSS + Javascript',
    tags: ['topic:code', 'creation:website']

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
    tags: ['topic:code', 'creation:website']
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
    tags: ['topic:code', 'topic:design', 'creation:website']
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
    tags: ['topic:code', 'creation:art', 'creation:game', 'creation:website']
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
    tags: ['topic:code', 'topic:design', 'creation:app']
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
    tags: ['topic:code', 'creation:website']
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
    tags: ['topic:code', 'creation:website']
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
    tags: ['topic:code', 'topic:project-management', 'creation:website']
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
    tags: ['topic:code', 'creation:art', 'creation:game', 'creation:website']
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
    tags: ['topic:code', 'creation:website']
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
  }

  //

  // {
  //   name: 'Experimental Javascript',
  //   topic: ['code'],
  //   length: 'short',
  //   difficulty: 'intermediate',
  //   creation: ['art', 'game', 'website'],
  //   codeTopic: ['interaction'],
  //   designTopic: [],
  //   codingLanguage: ['CSS', 'HTML', 'Javascript'],
  //   workingTopic: [],
  //   library: ['Matter.js', 'Pixi.js', 'Three.js'],
  //   framework: [],
  //   software: []
  // },
  // {
  //   name: 'Experimental Typography For The Web',
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
  // },
  // {
  //   name: 'Crypto + Web 3 for Creatives',
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
  // },
  // {
  //   name: 'Python for the Web',
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
  // },
  // {
  //   name: 'WordPress',
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
  // },
  // {
  //   name: 'Command Line for Creatives',
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
  // },
  // {
  //   name: 'Ruby on Rails',
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
  // },
  // {
  //   name: 'Advanced CSS + Javascript',
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
  // },
  // {
  //   name: 'Shopify Theme Development',
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
  // },
  // {
  //   name: 'Intro to React.js',
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
  // },
  // {
  //   name: 'Ajax + APIs',
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
  // },
  // {
  //   name: 'Shaders for the Web',
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
  // },
  // {
  //   name: 'Digital Project Management',
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
  // },
  // {
  //   name: 'Visual Design + Branding',
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
  // },
  // {
  //   name: 'Instagram Filters + Spark AR',
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
  // },
  // {
  //   name: 'Intro to User Experience Design',
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
  // },
  // {
  //   name: 'Intro to User Interface Design',
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
  // }
]
