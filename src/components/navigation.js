import React from 'react'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styles from './navigation.module.css'

export default (props) => (
  <nav role="navigation">
    <div className={styles.navContainer}>
        <div style={{height: "100px", width: "50%"}}>
          <Link to="/"><Image className={styles.logo} /></Link>
        </div>
        <ul className={styles.navigation}>
          <li className={styles.navigationItem}>
            <Link to="/">HOME</Link>
          </li>
          <li className={styles.navigationItem}>
            <Link to="/blog/">BLOG</Link>
          </li>
          <li className={styles.navigationItem}>
              <Link to="/">ABOUT ME</Link>
          </li>
          <li className={styles.navigationItem}>
              <Link to="/">ROUTE</Link>
          </li>
          <li className={styles.navigationItem}>
              <Link to="/">GEAR</Link>
          </li>
        </ul>
      </div>
  </nav>
)

// export const query = graphql`
  // query {
    // logo: file(relativePath: { eq: "images/logo.png" }) {
      // childImageSharp {
        // fluid(maxWidth: 400, maxHeight: 250) {
          // ...GatsbyImageSharpFluid
        // }
      // }
    // }
  // }
// `;

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fluid(maxHeight: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
);