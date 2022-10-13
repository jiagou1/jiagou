module.exports = {
   title: 'Hello VuePress',
   description: 'Just playing around',
   themeConfig: {
      nav: [
          { text: '主页', link: '/' },
          {
              text: '知识库',
              items: [
                  { text: 'FAQ', link: '/KnowledgeBase/FAQ/1.AWTK' },
                  { text: 'HowTo', link: '/KnowledgeBase/HowTo/api_doc' }
              ]
          },
          {
              text: '了解更多',
              items: [
                  { text: 'AWTK 官网', link: 'https://www.zlg.cn/index/pub/awtk.html' },
                  { text: 'AWTK 云平台', link: 'https://awtk.zlg.cn/' },
                  { text: 'GitHub 仓库', link: 'https://github.com/zlgopen/awtk' },
                  { text: 'Gitee 仓库', link: 'https://gitee.com/zlgopen/awtk' }
                 
              ]
          }
      ],
      sidebar: [
         {
            title: 'Group 1',   // 必要的
            path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: -1,    // 可选的, 默认值是 1
            children: [
              '/ffff',
              '/page-a',
              ['/page-b', 'Explicit link text']
            ]
          },
          {
            title: 'Group 2',
            children: [ /* ... */ ],
            initialOpenGroupIndex: -1 // 可选的, 默认值是 0
          }
        ]
        }

  }

