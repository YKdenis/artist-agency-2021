import * as React from 'react'

// Stap 1: Importeer de useStaticQuery hook en graphql tag
import { useStaticQuery, graphql } from 'gatsby'

const Header = () => {
  /* Stap 2: gebruik de useStaticQuery hook en
    graphql tag om de data te query'en
    (De query wordt uitgevoerd tijdens build time) */
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header>
      {/* Stap 3: Gebruik de data in je component */}
      <h1>{ data.site.siteMetadata.title }</h1>
    </header>
  )
}

export default Header