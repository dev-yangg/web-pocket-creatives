import "dotenv/config";
import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Pocket Creatives",
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: process.env.WP_URL,
        type: {
          MediaItem: {
            localFile: {
              excludeByMimeTypes: [`video/mp4`, `image/svg+xml`],
            },
          },
        },
      },
    },
  ],
};

export default config;
