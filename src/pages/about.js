import React from 'react'
import get from 'lodash/get'

import Layout from "../components/layout"
import SEO from '../components/SEO';
import about from '../images/about.jpg';

import styles from './about.module.css'

class AboutIndex extends React.Component {
    render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');

    return (
        <Layout location={this.props.location}>
            <SEO pathname="/about" title="About" />
            <div style={{ background: '#fff' }}>
                <div className="wrapper">
                    <h2 className="section-headline">About</h2>
                    <img src={about} className={styles.image} />
                    <p>Hey, my name’s Lucas, and I’m wandering around on a bike for a while.</p>
                    <p>On May 1st, 2019, I flew across the ocean to a country I’ve never been to with a shiny new bike that I’ve never ridden. Before this, I knew nothing of “bicycle touring”, or “bikepacking”, or “successfully living in a tent and cycling for a year without dying”, but I’ve always loved setting out on grand adventures that I’m underqualified and ill-prepared for.</p>
                    <p>I set out to cycle across Asia, but I also set out to cement a few ideas in my head. Ideas like: maybe grand adventures aren’t reserved for rugged manly men with bushy beards, and maybe the world isn’t this big scary place that everyone says it is, and maybe forcing yourself into novel, challenging experiences is a pretty good thing for self-growth.</p>
                    <p>I started cycling, and I messed things up <i>a lot</i>. But I gradually got smarter, fitter, and more confident. It was hard, really hard, but I loved it. And with each passing pedal stroke, my plans for the future grew larger and longer. "Why stop at just Asia?”, I thought. “If I’m going to do something, I might as well <i>really</i> do it, right?"</p>
                    <p>So, I decided to cycle the “rest of the world”—or at least two more thin slices of it that give the impression of this. When circumstances are right, I’ll cycle down from my home in the US to the bottom of the Americas, then head on over to southern Africa and cycle back up to Istanbul where I first started for that satisfying closed loop. And, maybe somewhere in these thousands and thousands of miles I’ll find the elusive elixir of happiness. At least, I hope to find that my legs stop hurting so much at some point.</p>
                </div>
            </div>
        </Layout>
        )
    }
}

export default AboutIndex;