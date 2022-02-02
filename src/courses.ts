import {TagId} from './tags'

type CourseTag = {
  id: TagId
  weight: number
}

type Course = {
  name: string
  tags: CourseTag[]
  prerequisites: Prerequisite[]
}

type Prerequisite =
  | 'Foundation HTML, CSS + Javascript'
  | 'Javascript for Designers'
  | 'Visual Design + Branding'
  | 'Intro to Python'
  | 'Plan, Design + Code Your First Website'

export const COURSES: Course[] = [
  {
    name: 'Foundation HTML, CSS + Javascript',
    tags: [
      {
        id: 'topic:code',
        weight: 10
      },
      {
        id: 'topic:website',
        weight: 10
      },
      {id: 'coding-language:HTML', weight: 10},
      {id: 'coding-language:CSS', weight: 10},
      {id: 'coding-language:JS', weight: 10},
      {id: 'topic:front-end', weight: 10},
      {id: 'topic:web-dev', weight: 10}
    ],
    prerequisites: ['Plan, Design + Code Your First Website']
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
      {
        id: 'topic:code',
        weight: 10
      },
      {
        id: 'topic:website',
        weight: 10
      },
      {
        id: 'topic:animation',
        weight: 6
      },
      {
        id: 'topic:creative-coding',
        weight: 10
      },
      {id: 'coding-language:JS', weight: 4}
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
    tags: [
      {
        id: 'topic:code',
        weight: 10
      },
      {
        id: 'topic:design',
        weight: 10
      },
      {
        id: 'topic:website',
        weight: 10
      },
      {id: 'coding-language:HTML', weight: 10},
      {id: 'coding-language:CSS', weight: 10},
      {id: 'topic:project-management', weight: 1},
      {id: 'topic:front-end', weight: 10}
    ],
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
    tags: [
      {
        id: 'topic:code',
        weight: 10
      },
      {id: 'coding-language:python', weight: 10}
    ],
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
    tags: [
      {
        id: 'topic:code',
        weight: 10
      },
      {
        id: 'topic:design',
        weight: 8
      },
      {
        id: 'topic:app',
        weight: 10
      },
      {id: 'coding-language:swift', weight: 10}
    ],
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
    tags: [
      {
        id: 'topic:code',
        weight: 10
      },
      {
        id: 'topic:website',
        weight: 10
      },
      {
        id: 'topic:animation',
        weight: 10
      },
      {id: 'coding-language:HTML', weight: 4},
      {id: 'coding-language:CSS', weight: 4},
      {id: 'coding-language:JS', weight: 6},
      {id: 'coding-tool:GSAP', weight: 10}
    ],
    prerequisites: [
      'Foundation HTML, CSS + Javascript',
      'Javascript for Designers'
    ]
    // topic: ['code'],
    // length: 'short',
    // difficulty: 'beginner',
    // topic: ['website'],
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
    tags: [
      {
        id: 'topic:code',
        weight: 10
      },
      {
        id: 'topic:website',
        weight: 10
      },
      {
        id: 'topic:animation',
        weight: 8
      },
      {id: 'coding-language:HTML', weight: 4},
      {id: 'coding-language:CSS', weight: 4},
      {id: 'coding-language:JS', weight: 10},
      {id: 'topic:front-end', weight: 10},
      {id: 'topic:web-dev', weight: 10}
    ],
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
    tags: [
      {
        id: 'topic:code',
        weight: 10
      },
      {
        id: 'topic:website',
        weight: 10
      },
      {
        id: 'topic:data-viz',
        weight: 10
      },
      {id: 'coding-language:HTML', weight: 4},
      {id: 'coding-language:CSS', weight: 4},
      {id: 'coding-language:JS', weight: 6}
    ],
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
      {
        id: 'topic:code',
        weight: 10
      },
      {
        id: 'topic:website',
        weight: 10
      },
      {
        id: 'topic:animation',
        weight: 6
      },
      {
        id: 'topic:creative-coding',
        weight: 10
      },
      {
        id: 'topic:data-viz',
        weight: 2
      },
      {id: 'coding-language:HTML', weight: 4},
      {id: 'coding-language:CSS', weight: 4},
      {id: 'coding-language:JS', weight: 6},
      {id: 'coding-tool:p5.js', weight: 10}
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
    tags: [
      {
        id: 'topic:code',
        weight: 10
      },
      {
        id: 'topic:website',
        weight: 10
      },
      {
        id: 'topic:animation',
        weight: 6
      },
      {id: 'coding-language:HTML', weight: 4},
      {id: 'coding-language:CSS', weight: 4},
      {id: 'coding-language:JS', weight: 6},
      {id: 'coding-tool:barba.js', weight: 10}
    ],
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
    tags: [
      {
        id: 'topic:code',
        weight: 10
      },
      {
        id: 'topic:website',
        weight: 10
      },
      {
        id: 'topic:animation',
        weight: 4
      },
      {
        id: 'topic:creative-coding',
        weight: 10
      },
      {id: 'topic:3D', weight: 10},
      {id: 'coding-language:HTML', weight: 4},
      {id: 'coding-language:CSS', weight: 4},
      {id: 'coding-language:JS', weight: 6},
      {id: 'coding-tool:three.js', weight: 6},
      {id: 'coding-language:GLSL', weight: 4}
    ],
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
      {
        id: 'topic:design',
        weight: 10
      },
      {
        id: 'topic:website',
        weight: 10
      },
      {
        id: 'topic:app',
        weight: 10
      },
      {
        id: 'topic:UI',
        weight: 6
      },
      {
        id: 'topic:graphic-design',
        weight: 10
      },
      {
        id: 'topic:art',
        weight: 10
      },
      {id: 'topic:UI', weight: 2},
      {id: 'topic:UX', weight: 2},
      {id: 'design-tool:figma', weight: 10}
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
    tags: [
      {
        id: 'topic:code',
        weight: 10
      },
      {
        id: 'topic:website',
        weight: 10
      },
      {
        id: 'topic:e-commerce',
        weight: 10
      },
      {
        id: 'topic:web3',
        weight: 10
      },
      {id: 'coding-language:HTML', weight: 4},
      {id: 'coding-language:CSS', weight: 4},
      {id: 'coding-language:JS', weight: 6},
      {id: 'coding-tool:web3.js', weight: 6}
    ],
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
  },
  {
    name: 'Shopify Theme Development',
    tags: [
      {
        id: 'topic:code',
        weight: 10
      },
      {
        id: 'topic:website',
        weight: 10
      },
      {
        id: 'topic:e-commerce',
        weight: 10
      },
      {id: 'coding-language:HTML', weight: 4},
      {id: 'coding-language:CSS', weight: 4},
      {id: 'coding-language:JS', weight: 4},
      {id: 'coding-tool:shopify', weight: 10}
    ],
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
      {id: 'topic:website', weight: 10},
      {id: 'topic:app', weight: 10},
      {id: 'topic:design', weight: 10},
      {id: 'topic:UX', weight: 10},
      {id: 'topic:UI', weight: 2},
      {id: 'design-tool:figma', weight: 10}
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
      {id: 'topic:design', weight: 10},
      {id: 'topic:website', weight: 10},
      {id: 'topic:app', weight: 10},
      {id: 'topic:UI', weight: 10},
      {id: 'topic:UX', weight: 2},
      {id: 'design-tool:figma', weight: 10}
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
    name: 'Experimental Typography for the Web',
    tags: [
      {id: 'topic:code', weight: 10},
      {id: 'topic:website', weight: 10},
      {id: 'topic:creative-coding', weight: 10},
      {id: 'topic:typography', weight: 10},
      {id: 'coding-language:HTML', weight: 4},
      {id: 'coding-language:CSS', weight: 4},
      {id: 'coding-language:JS', weight: 6},
      {id: 'coding-tool:p5.js', weight: 10}
    ],
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
    tags: [
      {id: 'topic:code', weight: 10},
      {id: 'topic:website', weight: 10},
      {id: 'topic:CMS', weight: 6},
      {id: 'coding-language:HTML', weight: 4},
      {id: 'coding-language:CSS', weight: 4},
      {id: 'coding-language:JS', weight: 4},
      {id: 'coding-language:python', weight: 10},
      {id: 'coding-tool:django', weight: 10}
    ],
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
    tags: [
      {id: 'topic:code', weight: 10},
      {id: 'topic:website', weight: 10},
      {id: 'topic:CMS', weight: 10},
      {id: 'coding-language:HTML', weight: 4},
      {id: 'coding-language:CSS', weight: 4},
      {id: 'coding-tool:wordpress', weight: 10}
    ],
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
    tags: [
      {id: 'topic:code', weight: 10},
      {id: 'topic:website', weight: 10},
      {id: 'coding-language:HTML', weight: 4},
      {id: 'coding-language:CSS', weight: 4},
      {id: 'coding-language:JS', weight: 4},
      {id: 'topic:front-end', weight: 10},
      {id: 'topic:back-end', weight: 10},
      {id: 'topic:web-dev', weight: 10},
      {id: 'coding-tool:command-line', weight: 10},
      {id: 'coding-tool:webpack', weight: 6}
    ],
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
    tags: [
      {id: 'topic:code', weight: 10},
      {id: 'topic:website', weight: 10},
      {id: 'topic:back-end', weight: 10},
      {id: 'coding-language:ruby-on-rails', weight: 10},
      {id: 'coding-language:HTML', weight: 4},
      {id: 'coding-language:CSS', weight: 4},
      {id: 'topic:back-end', weight: 10},
      {id: 'topic:web-dev', weight: 10}
    ],
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
    tags: [
      {id: 'topic:code', weight: 10},
      {id: 'topic:website', weight: 10},
      {id: 'topic:animation', weight: 6},
      {id: 'topic:back-end', weight: 2},
      {id: 'topic:e-commerce', weight: 2},
      {id: 'topic:creative-coding', weight: 2},
      {id: 'coding-language:HTML', weight: 4},
      {id: 'coding-language:CSS', weight: 10},
      {id: 'coding-language:JS', weight: 10},
      {id: 'topic:front-end', weight: 10},
      {id: 'topic:web-dev', weight: 6},
      {id: 'coding-tool:GSAP', weight: 4}
    ],
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
    tags: [
      {id: 'topic:code', weight: 10},
      {id: 'topic:website', weight: 10},
      {id: 'coding-language:HTML', weight: 4},
      {id: 'coding-language:CSS', weight: 4},
      {id: 'coding-language:JS', weight: 6},
      {id: 'topic:front-end', weight: 10},
      {id: 'topic:web-dev', weight: 10},
      {id: 'coding-tool:react', weight: 10}
    ],
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
      {id: 'topic:code', weight: 10},
      {id: 'topic:website', weight: 10},
      {id: 'topic:CMS', weight: 6},
      {id: 'topic:back-end', weight: 6},
      {id: 'topic:data-viz', weight: 6},
      {id: 'topic:e-commerce', weight: 2},
      {id: 'topic:creative-coding', weight: 2},
      {id: 'coding-language:HTML', weight: 4},
      {id: 'coding-language:CSS', weight: 4},
      {id: 'coding-language:JS', weight: 6},
      {id: 'topic:front-end', weight: 10},
      {id: 'topic:back-end', weight: 6},
      {id: 'topic:web-dev', weight: 10}
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
    //   codingLanguage: ['CSS', 'HTML', 'Javascript'],
  },
  {
    name: 'Shaders for the Web',
    tags: [
      {id: 'topic:code', weight: 10},
      {id: 'topic:website', weight: 10},
      {id: 'topic:creative-coding', weight: 10},
      {id: 'topic:animation', weight: 6},
      {id: 'topic:3D', weight: 10},
      {id: 'coding-language:HTML', weight: 4},
      {id: 'coding-language:CSS', weight: 4},
      {id: 'coding-language:JS', weight: 6},
      {id: 'coding-language:GLSL', weight: 10},
      {id: 'coding-tool:three.js', weight: 6}
    ],
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
  },
  {
    name: 'Digital Project Management',
    tags: [{id: 'topic:project-management', weight: 10}],
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
    tags: [
      {id: 'topic:design', weight: 5},
      {id: 'topic:art', weight: 8},
      {id: 'topic:3D', weight: 10},
      {id: 'design-tool:sparkAR', weight: 10}
    ],
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
