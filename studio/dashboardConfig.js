export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5fba4476706b225f0b0b7d85',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-4113asvf',
                  apiId: 'c8d70443-0465-433b-8505-c6d0fa726246'
                },
                {
                  buildHookId: '5fba4477706b2279250b6e8f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-yetdkyha',
                  apiId: '3c7fe429-5ad6-4e6e-a799-8b22b67668aa'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/matannahmani/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-yetdkyha.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
