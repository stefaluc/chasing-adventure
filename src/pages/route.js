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
                        On May 1st, 2019, I flew to Istanbul and set off cycling east. I spent the next 11 months crossing 13 countries in the Middle East, Caucasus, Central Asia, South Asia, and South East Asia. My original intention was to cycle until I reached Singapore, but in March 2020, I had to fly home from Bangkok, Thailand due to the the onset of the COVID-19 pandemic. It was a bit upsetting to be stopped just short of the finish line, but Bankgkok was still a very statisfying city to end in. And... close enough, right?
                    </div>
                    <br />
                    <br />
                    <h2 className="section-headline">Part II - The Americas
                        <span className={styles.subText}>&nbsp;&nbsp;~17,000km (10,500mi)</span>
                        <span className={styles.sideText} style={{color: '#f1c40f'}}>In Progress</span>
                    </h2>
                    <iframe src="https://www.google.com/maps/d/embed?mid=1tk5fo_32yhvL0YxBbyqIjQAlrfFIXxqa"
                        style={{width: '100%', height: '480px'}} />
                    <div>
                        For Part II, I'll be leaving my doorstep and cycling as far as possible away from it. This will take me south to the small city of Ushuaia, a city at the southernmost end of Argentina. Along the way I'll be crossing at least 13 countries.
                    </div>
                    <br />
                    <br />
                    <h2 className="section-headline">Part III - Africa
                        <span className={styles.subText}>&nbsp;&nbsp;~13,000km (8,000mi)</span>
                        <span className={styles.sideText} style={{color: '#e74c3c'}}>Future</span>
                    </h2>
                    <iframe src="https://www.google.com/maps/d/embed?mid=1RpA-GR_RxiLhG01XksD-4EN9kjITh613"
                        style={{width: '100%', height: '480px'}} />
                    <div>
                        The final section is still a ways off, so I haven't made an concrete decisions for it yet. But, the idea right now would be to cycle from Cape Town, South Africa to Istanbul, Turkey. I started my journey in Istanbul, and it seems right to finish it there as well. I can arrive in Istanbul either via western Africa and Europe, or eastern Africa and the Middle East. I've got plenty of time to ponder which option feels right for me.
                    </div>
                </div>
            </div>
        </Layout>
        )
    }
}

export default RouteIndex;