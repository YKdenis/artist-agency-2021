import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

const ArtistsPage = ({data: {allWpArtist: {edges}}}) => {
  return (
    <Layout pageTitle="Artists of Inghelbrecht Agency">
      {edges.map((item) => {
        const artist = item.node.artistMeta;
        const slug = item.node.slug;
        return <Link to={`/artists/${slug}`}>
          <p key={item.node.id}>{artist.firstName} {artist.lastName}</p>
        </Link>
        
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
				id
        slug
      }
    }
  }
}

`

export default ArtistsPage