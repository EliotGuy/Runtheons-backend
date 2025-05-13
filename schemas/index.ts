import page from './page'
import seo from './seo'
import header from './header'
import footer from './footer'
import {colorablePlainText} from './richText'
import {complexRichText} from './richText'
import {legalRichText} from './richText'
import {minimalRichText} from './richText'
import {simpleRichText} from './richText'
import {simpleRichTextWithImages} from './richText'
import {company} from './company'
import {solutionsPartner} from './solutionsPartner'
import {pressRelease} from './pressRelease'
import {technologyPartner} from './technologyPartner'
import {video} from './reusableContent'
import {blogCategories} from '../fields/blogCategories'
import {blogCategory} from './categories'
import {blogTopic} from './categories'
import {useCase} from './categories'
import {industry} from './categories'
import {technology} from './categories'
import {blogPost} from './blogPost'
import {hubspotForm} from './reusableContent'
import {person} from './person'
import {cta, testimonial, token} from './reusableContent'

export const schemas = [
  page,
  seo,
  video,
  blogCategories,
  blogCategory,
  blogTopic,
  blogPost,
  cta,
  testimonial,
  token,
  hubspotForm,
  useCase,
  industry,
  technology,
  technologyPartner,
  company,
  person,
  header,
  footer,
  colorablePlainText,
  complexRichText,
  legalRichText,
  minimalRichText,
  simpleRichText,
  simpleRichTextWithImages,
  pressRelease,
  solutionsPartner,
]
