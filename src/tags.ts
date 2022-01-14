type TagTopic = 'topic:code' | 'topic:design' | 'topic:project-management'
type TagCodeCreation = 'creation:website' | 'creation:app'
// | 'creation:art'
// | 'creation:game'
// | 'creation:visual-design'
// | 'creation:software'
type TagWebsiteFeature =
  | 'website-feature:basic'
  | 'website-feature:animations'
  | 'website-feature:e-commerce'
  | 'website-feature:CMS'
  | 'website-feature:creative-coding'
  | 'website-feature:back-end'
  | 'website-feature:data-viz'
  | 'website-feature:3D'
type TagDesignCreation =
  | 'creation:art'
  | 'creation:UX'
  | 'creation:UI'
  | 'creation:branding'
  | 'creation:3D'

export type TagId =
  | TagTopic
  | TagCodeCreation
  | TagWebsiteFeature
  | TagDesignCreation
