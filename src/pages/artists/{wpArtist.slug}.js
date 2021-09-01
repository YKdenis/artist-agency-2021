import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import {
  header,
  headerInfo,
  headerPicture,
  artistName,
  fullName,
  artistRoles,
  artistDescription,
  artistInfo,
  artistPictures,
  artistPicture,
} from "../../page.module.css"

const ArtistPage = ({
  data: {
    wpArtist: {
      artistMeta: artist,
      roles: { nodes: roles },
    },
  },
}) => {
  const image = getImage(artist.profilePicture.localFile)
  const picture1 = getImage(artist.pictures.picture1.localFile)
  const picture2 = getImage(artist.pictures.picture2.localFile)
  const picture3 = getImage(artist.pictures.picture3.localFile)

  return (
    <Layout pageTitle="Artist Template">
      <div className={header}>
        <div className={headerInfo}>
          {artist.artistName && (
            <h3 className={artistName}>{artist.artistName}</h3>
          )}
          <div className={artistRoles}>
            {roles.map((role, i) => (
              <span key={i}>
                {role.name} {i + 1 < roles.length && "- "}
              </span>
            ))}
          </div>
          <h1 className={fullName}>
            {artist.firstName} {artist.lastName}
          </h1>
          <div
            className={artistDescription}
            dangerouslySetInnerHTML={{ __html: artist.description }}
          />
          <p>
            <span className={artistInfo}>Email:</span> {artist.email}
          </p>
          <p>
            <span className={artistInfo}>Phone:</span> {artist.phoneNumber}
          </p>
          <p>
            <span className={artistInfo}>Height:</span> {artist.height}
          </p>
          <p>
            <span className={artistInfo}>Shirt Size:</span> {artist.shirtSize}
          </p>
          <p>
            <span className={artistInfo}>Shoe Size:</span> {artist.shoeSize}
          </p>
          <p>
            <span className={artistInfo}>Origin:</span> {artist.origin}
          </p>
        </div>
        <GatsbyImage
          className={headerPicture}
          image={image}
          alt={artist.profilePicture.altText}
        />
      </div>
      <div className={artistPictures}>
        <GatsbyImage
          className={artistPicture}
          image={picture1}
          alt={artist.pictures.picture1.altText}
        />
        <GatsbyImage
          className={artistPicture}
          image={picture2}
          alt={artist.pictures.picture2.altText}
        />
        <GatsbyImage
          className={artistPicture}
          image={picture3}
          alt={artist.pictures.picture3.altText}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    wpArtist(id: { eq: $id }) {
      artistMeta {
        firstName
        lastName
        email
        description
        artistName
        height
        origin
        phoneNumber
        shirtSize
        shoeSize
        profilePicture {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          altText
        }
        pictures {
          picture1 {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
          picture2 {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
          picture3 {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
        }
      }
      roles {
        nodes {
          name
        }
      }
    }
  }
`

export default ArtistPage
