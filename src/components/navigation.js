import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

export default () => (
  <nav role="navigation">
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
  </nav>
)
