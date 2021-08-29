import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import Artist from "../../components/artist"
import {
  hero,
  section,
  subtitle,
  artists,
  description,
} from "../../page.module.css"

const ArtistsPage = ({
  data: {
    allWpArtist: { edges: artistsInfo },
    wpPage: { artistsPage },
  },
}) => {
  const image = getImage(artistsPage.headerArtists.picture.localFile)
  return (
    <Layout pageTitle="Artists of Inghelbrecht Agency">
      <GatsbyImage
        className={hero}
        image={image}
        alt={artistsPage.headerArtists.picture.altText}
      />
      <div className={section}>
        <h2 className={subtitle}>{artistsPage.headerArtists.title}</h2>
        <div
          className={description}
          dangerouslySetInnerHTML={{
            __html: artistsPage.headerArtists.description,
          }}
        />
        <div className={artists}>
          {artistsInfo.map(({ node: artist }) => (
            <Artist key={artist.id} artist={artist} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    wpPage(slug: { eq: "artists" }) {
      artistsPage {
        headerArtists {
          description
          title
          picture {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
              }
            }
            altText
          }
        }
      }
    }

    allWpArtist {
      edges {
        node {
          artistMeta {
            artistName
            firstName
            lastName
            profilePicture {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: BLURRED
                    quality: 100
                    transformOptions: { grayscale: true }
                  )
                }
              }
              altText
            }
          }
          slug
          id
        }
      }
    }
  }
`

export default ArtistsPage
