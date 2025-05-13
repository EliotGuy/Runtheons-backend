import {ImageIcon} from '@sanity/icons'
import {richImage} from '../../fields/richImage'

export const imageBlock = {
  ...richImage,
  name: 'imageBlock',
  title: 'Image Block',
  icon: ImageIcon,
}
