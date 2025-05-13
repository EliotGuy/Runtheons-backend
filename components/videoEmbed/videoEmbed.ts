import {PlayIcon} from '@sanity/icons'
import {definePageComponent} from '../definePageComponent'
import {defineField} from 'sanity'

export const videoEmbed = definePageComponent({
  name: 'videoEmbed',
  title: 'Video',
  description: 'Upload a video file',
  icon: PlayIcon,
  fields: [
    defineField({
      name: 'video',
      title: 'Upload Video',
      type: 'file',
      options: {
        accept: 'video/*',
      },
    }),
  ],
  preview: {
    select: {
      videoUrl: 'video.asset.url',
    },
    prepare({videoUrl}) {
      return {
        title: 'Video Block',
        subtitle: videoUrl ? 'Uploaded Video' : 'No video uploaded',
        media: PlayIcon,
      }
    },
  },
})
