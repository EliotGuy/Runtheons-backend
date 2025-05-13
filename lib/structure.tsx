import {
  HomeIcon,
  ComponentIcon,
} from '@sanity/icons'
import { IoGlobeOutline } from 'react-icons/io5'
import { StructureBuilder } from 'sanity/structure'

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      mainSitePagesMenu(S),
      contentBlocksMenu(S),
    ])

const mainSitePagesMenu = (S: StructureBuilder) =>
  S.listItem()
    .title('Main Website Pages')
    .icon(IoGlobeOutline)
    .child(
      S.list()
        .title('Main Website Pages')
        .items([
          S.listItem()
            .title('Home')
            .icon(HomeIcon)
            .child(
              S.document()
                .schemaType('page')
                .documentId('9c8476d6-0511-4e19-b4bb-df1ee688b94b'),
            ),
          S.listItem().title("Main Pages").child(S.documentTypeList('page'))
        ]),
    )


const contentBlocksMenu = (S: StructureBuilder) =>
  S.listItem()
    .title('Content Building Blocks')
    .icon(ComponentIcon)
    .child(
      S.list()
        .title('Content Building Blocks')
        .items([
          S.documentTypeListItem('globalHeader').title('Global Header'),
          S.documentTypeListItem('footer').title('Global Footer'),
        ]),
    )