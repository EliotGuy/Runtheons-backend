import urlBuilder from '@sanity/image-url'

export const PROJECT_ID = '6vftv9o2'
export const DATASET = 'dev'

export const imageBuilder = urlBuilder({
  projectId: '6vftv9o2', // Replace with your Sanity project ID
  dataset: 'dev', // Replace with your Sanity dataset
})
