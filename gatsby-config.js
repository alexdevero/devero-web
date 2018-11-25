module.exports = {
  siteMetadata: {
    title: 'DEVERO Corporation'
  },
  pathPrefix: '/',
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`postcss-import`)(),
          require(`postcss-extend`)(),
          require(`postcss-nesting`)(),
          require('postcss-pxtorem')({
            mediaQuery: false,
            minPixelValue: 0,
            propWhiteList: [],
            replace: true,
            rootValue: 16,
            selectorBlackList: ['html'],
            unitPrecision: 5
          }),
          require(`postcss-preset-env`)({ stage: 3 }),
          require(`cssnano`)()
        ]
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'DEVERO Corporation',
        short_name: 'DEVERO',
        start_url: '/',
        background_color: '#D30320',
        theme_color: '#D30320',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png' // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
}
