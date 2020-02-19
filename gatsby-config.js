module.exports = {
  siteMetadata: {
    title: "Code Camp Gatsby Blog",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "files",
        path: `${__dirname}/src/markdown`,
      },
    },

    "gatsby-transformer-remark",
  ],
}
