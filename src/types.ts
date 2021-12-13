type TagTopic = 'topic:code' | 'topic:design' | 'topic:project-management'
type TagCreation =
  | 'creation:website'
  | 'creation:app'
  // | 'creation:art'
  // | 'creation:game'
  | 'creation:visual-design'
// | 'creation:software'
type TagWebsiteFeature =
  | 'website-feature:animations'
  | 'website-feature:ecommerce'
  | 'website-feature:CMS'
  | 'website-feature:UX'
  | 'website-feature:UI'
  | 'website-feature:branding'

export type Tag = TagTopic | TagCreation | TagWebsiteFeature
