import Homepage, { type HomepageContent } from "../views/home/Homepage";
import Seo from "../components/Seo";
import { graphql } from "gatsby";

interface Data {
  wpPage: {
    homepageContent: HomepageContent;
  };
}

export const Head = () => <Seo />;

export default function Index({ data }: { data: Data }) {
  return <Homepage content={data.wpPage.homepageContent} />;
}

export const query = graphql`
{
  wpPage(slug: { eq: "homepage" }) {
      homepageContent {
        hero {
          heading,
          video {
            node {
              mediaItemUrl
            }
          },
          bannerlogo {
            node {
              mediaItemUrl
            }
          },
          bannerlogoflat {
            node {
              mediaItemUrl
            }
          },
          bannercutout1 {
            node {
              mediaItemUrl
            }
          },
          bannercutout2 {
            node {
              mediaItemUrl
            }
          },
        }
      }
  }
}
`;
