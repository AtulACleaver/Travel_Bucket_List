const config = require( './package.json' );

const { title, description, author, repository, homepage } = config;

const siteMetadata = {
  companyName: title,
  companyUrl: repository.url,
  authorName: author.name,
  authorUrl: author.url,
  siteUrl: homepage,
  siteDescription: description,
};

module.exports = {
  siteMetadata,
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    'gatsby-plugin-react-leaflet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteMetadata.companyName,
        short_name: siteMetadata.companyName,
        start_url: '/',
        icon: 'src/assets/images/react-leaflet-icon.png',
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GCMS',
        fieldName: 'gcms',
        // UPDATE ME: This API endpoint should come from YOUR settings and should not be
        // this same value. Find your API endpoint in GraphCMS > Settings > API Access
        url: 'https://api-us-east-1.graphcms.com/v2/ckbob7r7707zk01yvcls0gu8f/master',
      },
    },
  ],
};
