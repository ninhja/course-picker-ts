type TagTopic = 'topic:code' | 'topic:design' | 'topic:project-management'
type TagCreation =
  | 'creation:website'
  | 'creation:app'
  | 'creation:art'
  | 'creation:game'
  | 'creation:visual-design'
  | 'creation:software'
type TagWebsiteFeature =
  | 'website-features:animations'
  | 'website-features:ecommerce'

export type Tag = TagTopic | TagCreation | TagWebsiteFeature
