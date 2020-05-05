export default {
  widgets: [
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
                  buildHookId: '5eb19e9c13d7509e96c57cd8',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-test-studio',
                  apiId: 'c0a17821-fc6d-4261-83be-d2679f7d2471'
                },
                {
                  buildHookId: '5eb19e9c9a9beb8cfd654b53',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-test',
                  apiId: 'd0c9c5b1-1237-4461-a8df-2c31e466b505'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/paalfredrik/sanity-kitchen-sink-test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-test.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
