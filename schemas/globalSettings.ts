export default {
    name: 'globalSettings',
    title: 'Global Settings',
    type: 'document',
    __experimental_actions: ['create', 'update', 'delete'],
    fields: [
      {
        name: 'header',
        title: 'Header',
        type: 'object',
        fields: [
          { name: 'title', title: 'Site Title', type: 'string', initialValue: 'Default Site Title' },
          { name: 'logo', title: 'Logo', type: 'image', options: { hotspot: true } },
          {
            name: 'mainNav',
            title: 'Main Navigation',
            type: 'array',
            of: [
              {
                type: 'object',
                fields: [
                  { name: 'title', title: 'Title', type: 'string', initialValue: 'Home' },
                  { name: 'link', title: 'Link', type: 'string', initialValue: '/' },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'predefinedHeader',
        title: 'Predefined Header',
        type: 'object',
        fields: [
          { name: 'title', title: 'Site Title', type: 'string', initialValue: 'Default Site Title' },
          { name: 'logo', title: 'Logo', type: 'image', options: { hotspot: true } },
          {
            name: 'mainNav',
            title: 'Main Navigation',
            type: 'array',
            of: [
              {
                type: 'object',
                fields: [
                  { name: 'title', title: 'Title', type: 'string', initialValue: 'Home' },
                  { name: 'link', title: 'Link', type: 'string', initialValue: '/' },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'footer',
        title: 'Footer',
        type: 'object',
        fields: [
          {
            name: 'footerColumns',
            title: 'Footer Columns',
            type: 'array',
            of: [
              {
                type: 'object',
                fields: [
                  { name: 'title', title: 'Column Title', type: 'string', initialValue: 'Default Column Title' },
                  {
                    name: 'links',
                    title: 'Links',
                    type: 'array',
                    of: [
                      {
                        type: 'object',
                        fields: [
                          { name: 'title', title: 'Link Title', type: 'string', initialValue: 'Default Link Title' },
                          { name: 'url', title: 'URL', type: 'string', initialValue: 'https://default.url' },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'predefinedFooter',
        title: 'Predefined Footer',
        type: 'object',
        fields: [
          {
            name: 'footerColumns',
            title: 'Footer Columns',
            type: 'array',
            of: [
              {
                type: 'object',
                fields: [
                  { name: 'title', title: 'Column Title', type: 'string', initialValue: 'Default Column Title' },
                  {
                    name: 'links',
                    title: 'Links',
                    type: 'array',
                    of: [
                      {
                        type: 'object',
                        fields: [
                          { name: 'title', title: 'Link Title', type: 'string', initialValue: 'Default Link Title' },
                          { name: 'url', title: 'URL', type: 'string', initialValue: 'https://default.url' },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'copyrightText',
        title: 'Copyright Text',
        type: 'string',
        initialValue: ' 2025 Your Company',
      },
    ],
  };