import React from 'react'
import get from 'lodash/get'

import Layout from "../components/layout"
import SEO from '../components/SEO';

import styles from './route.module.css'

class RouteIndex extends React.Component {
    render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');

    return (
        <Layout location={this.props.location}>
            <SEO pathname="/route" title="Route" />
            <div style={{ background: '#fff' }}>
                <div className="wrapper">
                    <h2 className="section-headline">Part I - Asia
                        <span className={styles.subText}>&nbsp;&nbsp;13,000km (8,000mi)</span>
                        <span className={styles.sideText} style={{color: '#2ecc71'}}>Completed</span>
                    </h2>
                    <iframe src="https://www.google.com/maps/d/embed?mid=1mGhZslTTwt9ur1FcjiDJpEx4AIO8Jwkl"
                        style={{width: '100%', height: '480px'}} />
                    <div>
                        On May 1st, 2019, I flew to Istanbul and set off cycling east. I spent the next 11 months crossing 13 countries in the Middle East, Caucasus, Central Asia, South Asia, and South East Asia. My original intention was to cycle until I reached Singapore, but in March 2020, I had to fly home from Bangkok, Thailand due to the the onset of the COVID-19 pandemic.
                    </div>
                    <br />
                    <br />
                    <h2 className="section-headline">Part II - The Americas
                        <span className={styles.subText}>&nbsp;&nbsp;~17,000km (10,500mi)</span>
                        <span className={styles.sideText} style={{color: '#f1c40f'}}>Future</span>
                    </h2>
                    <iframe src="https://www.google.com/maps/d/embed?mid=1tk5fo_32yhvL0YxBbyqIjQAlrfFIXxqa"
                        style={{width: '100%', height: '480px'}} />
                    <br />
                    <br />
                    <h2 className="section-headline">Part III - Africa
                        <span className={styles.subText}>&nbsp;&nbsp;~13,000km (8,000mi)</span>
                        <span className={styles.sideText} style={{color: '#e74c3c'}}>Future Future</span>
                    </h2>
                    <iframe src="https://www.google.com/maps/d/embed?mid=1RpA-GR_RxiLhG01XksD-4EN9kjITh613"
                        style={{width: '100%', height: '480px'}} />
                </div>
            </div>
        </Layout>
        )
    }
}

export default RouteIndex;