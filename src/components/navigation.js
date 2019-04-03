import React from 'react'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from "gatsby"
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import Img from "gatsby-image"
import { withPrefix } from 'gatsby';

import instagram from '../images/instagram.png';
import rss from '../images/rss.png';

import styles from './navigation.module.css'

export default (props) => (
  <nav role="navigation">
    <div className={styles.navContainer}>
        <div style={{maxHeight: "135px", width: "33%"}}>
          <Link to="/"><img src={withPrefix('/images/logo.png')} alt="Logo" className={styles.logo}/></Link>
        </div>
        <ul className={styles.navigation}>
          <li className={styles.navigationItem}>
            <Link to="/blog">BLOG</Link>
          </li>
          <li className={styles.navigationItem}>
              <Link to="/route">ROUTE</Link>
          </li>
          <li className={styles.navigationItem}>
              <Link to="/">ABOUT ME</Link>
          </li>
          <li className={styles.navigationItem}>
            <OutboundLink href="https://instagram.com/lucas.stefanski" alt="Instagram" target="_blank">
              <img src={instagram} className={styles.icon} />
            </OutboundLink>
          </li>
          <li className={styles.navigationItem}>
            <a href="https://chasingadventure.net/rss.xml" alt="RSS" target="_blank">
              <img src={rss} className={styles.icon} />
            </a>
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