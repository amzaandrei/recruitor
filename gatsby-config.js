module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyAtjYFkUUUrZe6aL8-eAyY3N5A-htOhNgY",
          authDomain: "cloudimage-15f26.firebaseapp.com",
          databaseURL: "https://cloudimage-15f26.firebaseio.com",
          projectId: "cloudimage-15f26",
          storageBucket: "cloudimage-15f26.appspot.com",
          messagingSenderId: "53772963432",
          appId: "1:53772963432:web:af284842bfb1ef105b75dd"
        }
      }
    }
  ],
}
