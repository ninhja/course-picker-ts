type TagTopic = 'topic:code' | 'topic:design' | 'topic:project-management'
type TagCreation = 'creation:website' | 'creation:app'
// | 'creation:art'
// | 'creation:game'
// | 'creation:visual-design'
// | 'creation:software'
type TagWebsiteFeature =
  | 'website-feature:animations'
  | 'website-feature:e-commerce'
  | 'website-feature:CMS'
  | 'website-feature:UX'
  | 'website-feature:UI'
  | 'website-feature:branding'
  | 'website-feature:creative-coding'
  | 'website-feature:back-end'
  | 'website-feature:data-viz'

export type Tag = TagTopic | TagCreation | TagWebsiteFeature
