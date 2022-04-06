import {TagId} from './tags'

export type CourseTag = {
  id: TagId
  weight: number
}

export type Course = {
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
  },
  {
    name: 'Digital Project Management',
    tags: [{id: 'topic:project-management', weight: 10}],
    prerequisites: []
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
  }
]
