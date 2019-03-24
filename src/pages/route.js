import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from "../components/layout"

import favicon128 from '../images/favicon128.ico';

class RouteIndex extends React.Component {
    render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');

    return (
        <Layout location={this.props.location}>
            <Helmet title={siteTitle} 
                link={[
                    { rel: 'icon', type: 'image/ico', sizes: '128x128', href: `${favicon128}` },
                ]}
            />
            <div style={{ background: '#fff' }}>
                <div className="wrapper">
                    <h2 className="section-headline">The Plan</h2>
                    <iframe src="https://www.google.com/maps/d/embed?mid=1mGhZslTTwt9ur1FcjiDJpEx4AIO8Jwkl"
                        style={{width: '100%', height: '480px'}} />
                    <div>
                        <p>
                            I will begin my adventure on the western edge of Asia in the city of Istanbul and gradually make my way across the continent to Singapore. Along the way, I will be traversing the Caucasus, Pamir, Tien Shan, Hindu Kush, and Himalayan mountain ranges. From cold to hot, I will be mindlessly counting down the distance as I cross the Kyzylkum and Thar deserts. And from arid to lush, I will be venturing through the jungles of India and South East Asia.
                        </p>
                        <p>
                            The map above shows a very general depiction of the route I will be taking. In a "go with the flow" kind of attitude, I am intentionally leaving a lot of things open-ended at the start of this adventure to allow for spontaneity and unforeseen circumstances. The closest thing I have to an itinerary as of now is: I will be around this country around this month. Though time is mostly on my side, I will cautiously be keeping an eye on the calendar in order to make it through the mountain ranges leading into India before winter takes a hold of these lands with its chilling and snowy grasp.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
        )
    }
}

export default RouteIndex;