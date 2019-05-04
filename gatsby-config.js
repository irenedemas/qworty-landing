module.exports = {
  siteMetadata: {
    title: `QWORTY Quote Keyboard`,
    description: `Quote Keyboard for iOS`,
    author: `@irenedemas`,
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
        name: `QWORTY Quote Keyboard`,
        short_name: `QWORTY`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/qworty-icon.png`, // This path is relative to the root of the site.
        cache_busting_mode: `query`,
      },
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "src/favicon.ico",
      },
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-139362992-1",
        head: false,
        anonymize: true,
        respectDNT: true,
        exclude: ["/preview/**", "/do-not-track/me/too/"],
      },
    },
  ],
}
