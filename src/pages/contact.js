import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import {
  header,
  headerInfo,
  headerPicture,
  subtitle,
  companyInfo,
  socials,
  facebook,
  instagram,
  link,
} from "../page.module.css"

const ContactPage = ({
  data: {
    wpPage: {
      contactPage: { companyInformation, headerContact },
    },
  },
}) => {
  const image = getImage(headerContact.picture.localFile)

  return (
    <Layout>
      <div className={header}>
        <div className={headerInfo}>
          <h2 className={subtitle}>{headerContact.title}</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: headerContact.description,
            }}
          />
          <div className={companyInfo}>
            <a className={link} href={`mailto:${companyInformation.email}`}>
              {companyInformation.email}
            </a>
            <a className={link} href={`tel:${companyInformation.phoneNumber}`}>
              {companyInformation.phoneNumber}
            </a>
            <p>{`${companyInformation.address}, ${companyInformation.postcode} ${companyInformation.city}`}</p>
            <div className={socials}>
              Follow us:
              <a
                target="__blank"
                className={instagram}
                href={companyInformation.socials.instagram}
              >
                {" "}
              </a>
              <a
                target="__blank"
                className={facebook}
                href={companyInformation.socials.facebook}
              >
                {" "}
              </a>
            </div>
          </div>
        </div>
        <GatsbyImage
          className={headerPicture}
          image={image}
          alt={headerContact.picture.altText}
        />
      </div>
    </Layout>
  )
}

export default ContactPage

export const query = graphql`
  query {
    wpPage(slug: { eq: "contact-us" }) {
      contactPage {
        headerContact {
          description
          title
          picture {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        companyInformation {
          address
          city
          email
          phoneNumber
          postcode
          socials {
            facebook
            instagram
          }
        }
      }
    }
  }
`
