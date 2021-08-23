import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const ArtistsPage = ({data: {allWpArtist: {edges}}}) => {
  return (
    <Layout pageTitle="Artists of Inghelbrecht Agency">
      {edges.map((item) => {
        const artist = item.node.artistMeta;
        return <p>{artist.firstName} {artist.lastName}</p>
      })}
    </Layout>
  )
}

export const query = graphql`
  query {
  allWpArtist {
    edges {
      node {
        artistMeta {
          firstName
          lastName
          artistName
        }
      }
    }
  }
}

`

export default ArtistsPage