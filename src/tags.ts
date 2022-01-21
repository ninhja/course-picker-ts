type TagTopic = 'topic:code' | 'topic:design' | 'topic:project-management'
type TagCodeCreation = 'creation:website' | 'creation:app'
type TagWebsiteFeature =
  | 'website-feature:basic'
  | 'website-feature:animations'
  | 'website-feature:e-commerce'
  | 'website-feature:CMS'
  | 'website-feature:creative-coding'
  | 'website-feature:back-end'
  | 'website-feature:data-viz'
  | 'website-feature:3D'
  | 'website-feature:typography'
type TagDesignCreation =
  | 'creation:art'
  | 'creation:UX'
  | 'creation:UI'
  | 'creation:graphics'
  | 'creation:3D'
type TagCodingLanguage =
  | 'coding-language:HTML'
  | 'coding-language:CSS'
  | 'coding-language:JS'
  | 'coding-language:ruby-on-rails'
  | 'coding-language:python'
  | 'coding-language:swift'

export type TagId =
  | TagTopic
  | TagCodeCreation
  | TagWebsiteFeature
  | TagDesignCreation
  | TagCodingLanguage
