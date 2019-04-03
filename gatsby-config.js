let contentfulConfig

try {
  // Load the Contentful config from the .contentful.json
  contentfulConfig = require('./.contentful')
} catch (_) {}

// Overwrite the Contentful config with environment variables if they exist
contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID || contentfulConfig.spaceId,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN || contentfulConfig.accessToken,
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the delivery token need to be provided.'
  )
}

module.exports = {
  siteMetadata: {
      title: 'Chasing Adventure',
      siteUrl: 'https://chasingadventure.net',
      description: 'A year long bicycle trip across Asia from Istanbul to Singapore',
      image: '/images/logo.png',
  },
  pathPrefix: '/images',
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-137522130-1',
      }
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allContentfulBlogPost } }) => {
              return allContentfulBlogPost.edges.map(edge => {
                return Object.assign({}, {
                  description: edge.node.description.childMarkdownRemark.html,
                  date: edge.node.publishDate,
                  title: edge.node.title,
                  url: site.siteMetadata.siteUrl + '/blog/' + edge.node.slug,
                  guid: site.siteMetadata.siteUrl + '/blog/' + edge.node.slug,
                  custom_elements: [{ "content:encoded": edge.node.body.childMarkdownRemark.html }],
                })
              })
            },
            query: `
              {
                allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
                  edges {
                    node {
                      title
                      slug
                      publishDate(formatString: "MMMM Do, YYYY")
                      description {
                        childMarkdownRemark {
                          html
                        }
                      }
                      body {
                        childMarkdownRemark {
                          html
                        }
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Chasing Adventure RSS Feed",
          },
        ],
      },
    },
  ],
}
