import {defineField} from 'sanity'
import {alphabetizeByType} from '../utils'
import {
  accordion,
  basicText,
  hero,
  imageBlock,
  logoLinks,
  scroller,
  trustBar,
  videoEmbed,
  digitalTwin,
  performancePlan,
  featureHighlights,
  coachSection,
  learningIntegration,
  videoAnalysis,
  pricingPlan,
  faqComponent,
  categorySelection,
  atletaPricing,
  ourFounders,
  waitingList,
  thankYou,
} from '../components'
import {switcher} from '../components/switcher'

export const pageBody = defineField({
  name: 'body',
  title: 'Body',
  group: 'content',
  type: 'array',
  of: alphabetizeByType([
    // Layouts
    scroller,
    switcher,
    accordion,
    logoLinks,
    trustBar,
    hero,
    basicText,
    imageBlock,
    videoEmbed,
    digitalTwin,
    performancePlan,
    featureHighlights,
    coachSection,
    learningIntegration,
    videoAnalysis,
    pricingPlan,
    faqComponent,
    categorySelection,
    atletaPricing,
    ourFounders,
    waitingList,
    thankYou,
  ]),
  components: {},
  options: {
    insertMenu: {
      filter: true,
      views: [
        {
          name: 'grid',
          previewImageUrl: (schemaTypeName) => `/static/componentPreviews/${schemaTypeName}.png`,
        },
        {name: 'list'},
      ],
      groups: [
        {
          name: 'layouts',
          title: 'Layouts',
          of: ['scroller', 'switcher', 'accordion'],
        },
        {
          name: 'intros',
          title: 'Intros',
          of: ['hero'],
        },
        {
          name: 'customers',
          title: 'Customers',
          of: ['trustBar'],
        },
        {
          name: 'linksAndResources',
          title: 'Links & Resources',
          of: ['logoLinks'],
        },
        {
          name: 'misc',
          title: 'Misc.',
          of: ['basicText', 'videoEmbed'],
        },
      ],
    },
  },
})
