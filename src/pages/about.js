import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import {
  header,
  headerInfo,
  headerPicture,
  subtitle,
  missionSection,
  missionInfo,
} from "../page.module.css"

const AboutPage = ({
  data: {
    wpPage: {
      aboutPage: { headerAboutUs, mission },
    },
  },
}) => {
  const imageHeader = getImage(headerAboutUs.picture.localFile)
  const imageMission = getImage(mission.bannerPicture.localFile)

  return (
    <Layout pageTitle="About Us">
      <div className={header}>
        <div className={headerInfo}>
          <h2 className={subtitle}>{headerAboutUs.title}</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: headerAboutUs.description,
            }}
          />
        </div>
        <GatsbyImage
          className={headerPicture}
          image={imageHeader}
          alt={headerAboutUs.picture.altText}
        />
      </div>
      <div className={missionSection}>
        <GatsbyImage
          className={headerPicture}
          image={imageMission}
          alt={mission.bannerPicture.altText}
        />
        <div className={missionInfo}>
          <h2 className={subtitle}>{mission.title}</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: mission.description,
            }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    wpPage(slug: { eq: "about-us" }) {
      aboutPage {
        headerAboutUs {
          title
          description
          picture {
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
        }
        mission {
          title
          description
          bannerPicture {
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
        }
      }
    }
  }
`

export default AboutPage
