module.exports = {
  siteMetadata: {
    // edit below
    title: `Jakob Magnusson`,
    author: `Jakob Magnusson`,
    description: `My portfolio site`,
    siteUrl: `https://jakobmagnusson.se`,
    social: {
      twitter: `jakobmagnus`,
    },
  },
  plugins: [
    'gatsby-plugin-remove-serviceworker',
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `react-is`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/case-studies`,
        name: `case-studies`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        plugins: [
          `gatsby-remark-images`,
          `gatsby-remark-images-medium-zoom` // Important!
        ],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              linkImagesToOriginal: false // Important!
            }
          },
          {
            resolve: `gatsby-remark-images-medium-zoom`, // Important!
            options: {
              margin: 36,
              scrollOffset: 0,
            },
          },
        ],
      },
    },
  ],
}

