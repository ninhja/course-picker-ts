type TagTopic =
  | 'topic:code'
  | 'topic:design'
  | 'topic:project-management'
  | 'topic:UX'
  | 'topic:UI'
  | 'topic:graphic-design'
  | 'topic:3D'
  | 'topic:web3'
  | 'topic:animation'
  | 'topic:e-commerce'
  | 'topic:CMS'
  | 'topic:creative-coding'
  | 'topic:back-end'
  | 'topic:data-viz'
  | 'topic:typography'
  | 'topic:website'
  | 'topic:app'
  | 'topic:art'
  | 'topic:front-end'
  | 'topic:back-end'
  | 'topic:web-dev'

type TagCodingLanguage =
  | 'coding-language:HTML'
  | 'coding-language:CSS'
  | 'coding-language:JS'
  | 'coding-language:ruby-on-rails'
  | 'coding-language:python'
  | 'coding-language:swift'
  | 'coding-language:GLSL'
type TagCodingTool =
  | 'coding-tool:shopify'
  | 'coding-tool:wordpress'
  | 'coding-tool:command-line'
  | 'coding-tool:django'
type TagJSTool =
  | 'coding-tool:GSAP'
  | 'coding-tool:react'
  | 'coding-tool:three.js'
  | 'coding-tool:p5.js'
  | 'coding-tool:barba.js'
  | 'coding-tool:two.js'
  | 'coding-tool:webpack'
  | 'coding-tool:web3.js'

type TagDesignTool = 'design-tool:figma' | 'design-tool:sparkAR'

export type TagId =
  | TagTopic
  | TagCodingLanguage
  | TagCodingTool
  | TagJSTool
  | TagDesignTool
