type TagTopic =
  | 'topic:code'
  | 'topic:design'
  | 'topic:project-management'
  | 'topic:UX'
  | 'topic:UI'
  | 'topic:graphic-design'
  | 'topic:3D'
  | 'topic:basic'
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
  | 'topic:freelance'
  | 'topic:job-seeking'
  | 'topic:front-end'
  | 'topic:back-end'

type TagCodingLanguage =
  | 'coding-language:HTML'
  | 'coding-language:CSS'
  | 'coding-language:JS'
  | 'coding-language:ruby-on-rails'
  | 'coding-language:python'
  | 'coding-language:swift'

export type TagId = TagTopic | TagCodingLanguage
