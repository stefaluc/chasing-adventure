import React from 'react'
import { Link } from 'gatsby'
import get from 'lodash/get'
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { withPrefix } from 'gatsby';

import SEO from '../components/SEO';

import instagram from '../images/instagram.png';
import rss from '../images/rss.png';
import styles from './index.module.css'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <div>
        <SEO />
        <div className={styles.container}>
          <img src={withPrefix('/images/logo.png')} className={styles.logo} />
          <div className={styles.mainText}>Making my way from Istanbul to Singapore by bicycle.</div>
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
            <OutboundLink href="https://instagram.com/lucas.stefanski" alt="Instagram" target="_blank">
              <img src={instagram} className={styles.instagram} />
            </OutboundLink>
          </li>
          <li className={styles.navigationItem}>
            <a href="https://chasingadventure.net/rss.xml" alt="RSS" target="_blank">
              <img src={rss} className={styles.instagram} />
            </a>
          </li>
        </ul>
      </div>
  </nav>
)

export default RootIndex