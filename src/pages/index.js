import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import logo from '../images/logo.png';
import instagram from '../images/instagram.png';
import favicon128 from '../images/favicon128.ico';
import styles from './index.module.css'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <div>
        <Helmet title={siteTitle} 
            link={[
              { rel: 'icon', type: 'image/ico', sizes: '128x128', href: `${favicon128}` },
            ]}
        />
        <div className={styles.container}>
          <img src={logo} className={styles.logo} />
          <i style={{maxWidth: '1080px', fontSize: '1em'}}>Making my way from Istanbul to Singapore by bicycle.</i>
          <Nav />
        </div>
      </div>
    );
  }
}

const Nav = () => (
  <nav role="navigation">
    <div className={styles.navContainer}>
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
              <img src={instagram} className={styles.instagram} />
            </OutboundLink>
          </li>
        </ul>
      </div>
  </nav>
)

export default RootIndex