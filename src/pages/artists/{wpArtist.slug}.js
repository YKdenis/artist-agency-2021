import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'

const ArtistPage = ({data: {wpArtist: {artistMeta: artist}}}) => {
  return (
    <Layout pageTitle="Artiesten Template">
    <div>
      <h3>{artist.artistName}</h3>
      <h1>{artist.firstName} {artist.lastName}</h1>
      <div dangerouslySetInnerHTML={{__html: artist.description}} />
      <p>Email: {artist.email}</p>
      <p>Phone: {artist.phone}</p>
      <p>Height: {artist.height}</p>
      <p>Shirt Size: {artist.shirtSize}</p>
      <p>Shoe Size: {artist.shoeSize}</p>
      <p>Origin: {artist.origin}</p>
    </div>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery($id: String) {
    wpArtist(id: {eq: $id}) {
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
      }
    }
  }
`

export default ArtistPage 