export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d7671e719c1e3650eee805f',
                  title: 'Sanity Studio',
                  name: 'sanity-1313-blueprint-studio',
                  apiId: '6c8a1bf6-69da-4dd9-8442-8a9c4c3db175'
                },
                {
                  buildHookId: '5d7671e755efc0e794a772bc',
                  title: 'Portfolio Website',
                  name: 'sanity-1313-blueprint',
                  apiId: '0d5fafaf-ad17-4ec8-8ed0-ffb5cb17a87f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vwvva/sanity-1313-blueprint',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-1313-blueprint.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
