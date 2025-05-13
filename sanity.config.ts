import {SanityFormConfig, defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {projectId, datasetDev, datasetProd, studioApiVersion} from './lib/api'
import {media, mediaAssetSource} from 'sanity-plugin-media'
import {structure} from './lib/structure'
import {schemas} from './schemas'
import {iconPicker} from 'sanity-plugin-icon-picker'
import {simplerColorInput} from 'sanity-plugin-simpler-color-input'

import './static/studioStyles.css'

const plugins = [
  structureTool({
    structure,
  }),
  visionTool({defaultApiVersion: studioApiVersion}),
  iconPicker(),
  simplerColorInput(),
  media(),
]

const schema = {types: schemas}

const form: SanityFormConfig = {
  file: {
    assetSources: (previousAssetSources) => {
      return previousAssetSources.filter((assetSource) => assetSource !== mediaAssetSource)
    },
  },
  image: {
    assetSources: [mediaAssetSource],
  },
}

const beta = {
  // treeArrayEditing: {
  //   enabled: true,
  // },
}

// ENVIRONMENT-SPECIFIC CONFIGS

const prodConfig = defineConfig({
  title: 'Production',
  name: 'production',
  dataset: datasetProd,
  basePath: '/production',
  beta,
  projectId,
  plugins,
  schema,
  form,
})

const devConfig = defineConfig({
  title: 'Development',
  name: 'development',
  dataset: datasetDev,
  basePath: '/development',
  beta,
  projectId,
  plugins,
  schema,
  form,
})

// Create an array of configs
const configs = [prodConfig]

configs.unshift(devConfig)

export default configs
