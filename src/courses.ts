import {TagId} from './types'

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

export const COURSES: Course[] = [
  {
    name: 'Foundation HTML, CSS + Javascript',
    tags: [
      {
        id: 'topic:code',
        weight: 10
      },
      {
        id: 'creation:website',
        weight: 10
      }
    ],
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
      {
        id: 'topic:code',
        weight: 10
      },
      {
        id: 'creation:website',
        weight: 10
      },
      {
        id: 'website-feature:animations',
        weight: 10
      },
      {
        id: 'website-feature:creative-coding',
        weight: 10
      }
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
        id: 'creation:website',
        weight: 10
      }
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
      }
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
        weight: 10
      },
      {
        id: 'creation:app',
        weight: 10
      }
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
        id: 'creation:website',
        weight: 10
      },
      {
        id: 'website-feature:animations',
        weight: 10
      }
    ],
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
    tags: [
      {
        id: 'topic:code',
        weight: 10
      },
      {
        id: 'creation:website',
        weight: 10
      },
      {
        id: 'website-feature:animations',
        weight: 10
      }
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
        id: 'creation:website',
        weight: 10
      },
      {
        id: 'website-feature:data-viz',
        weight: 10
      }
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
        id: 'creation:website',
        weight: 10
      },
      {
        id: 'website-feature:animations',
        weight: 10
      },
      {
        id: 'website-feature:creative-coding',
        weight: 10
      }
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
        id: 'creation:website',
        weight: 10
      },
      {
        id: 'website-feature:animations',
        weight: 10
      }
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
        id: 'creation:website',
        weight: 10
      },
      {
        id: 'website-feature:animations',
        weight: 10
      },
      {
        id: 'website-feature:creative-coding',
        weight: 10
      }
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
        id: 'creation:website',
        weight: 10
      },
      {
        id: 'creation:app',
        weight: 10
      },
      {
        id: 'website-feature:UI',
        weight: 10
      },
      {
        id: 'website-feature:branding',
        weight: 10
      }
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
        id: 'creation:website',
        weight: 10
      },
      {
        id: 'website-feature:e-commerce',
        weight: 10
      }
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
    // 'creation:website'ame: 'Shopify Theme Development',
    // tags: [
    //   {
    //     id: 'topic:code',
    //     weight: 10
    //   },

    //   {
    //     id: 'website-feature:e-commerce',
    //     weight: 10
    //   },

    // ],
    // prerequisites: [
    //   'Foundation HTML, CSS + Javascript',
    //   'Javascript for Designers'
    // ]
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
      {id: 'creation:website', weight: 10},
      {id: 'creation:app', weight: 10},
      {id: 'topic:design', weight: 10},
      {id: 'website-feature:UX', weight: 10}
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
      {id: 'creation:website', weight: 10},
      {id: 'creation:app', weight: 10},
      {id: 'website-feature:UI', weight: 10}
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
    tags: [
      {id: 'topic:code', weight: 10},
      {id: 'creation:website', weight: 10},
      {id: 'website-feature:creative-coding', weight: 10}
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
      {id: 'creation:website', weight: 10},
      {id: 'website-feature:CMS', weight: 10}
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
      {id: 'creation:website', weight: 10},
      {id: 'website-feature:CMS', weight: 10}
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
      {id: 'creation:website', weight: 10},
      {id: 'website-feature:back-end', weight: 10}
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
      {id: 'creation:website', weight: 10},
      {id: 'website-feature:back-end', weight: 10}
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
      {id: 'creation:website', weight: 10},
      {id: 'website-feature:animations', weight: 10}
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
      {id: 'creation:website', weight: 10}
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
      {id: 'creation:website', weight: 10},
      {id: 'website-feature:CMS', weight: 10},
      {id: 'website-feature:back-end', weight: 10},
      {id: 'website-feature:data-viz', weight: 10}
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
    tags: [
      {id: 'topic:code', weight: 10},
      {id: 'creation:website', weight: 10},
      {id: 'website-feature:creative-coding', weight: 10}
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
    //   framework: [],
    //   software: []
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
    tags: [{id: 'topic:design', weight: 5}],
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
