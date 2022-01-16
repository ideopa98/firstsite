import React from 'react'
import indian from "../src/images/nativeamerican.jpg"
import Common from './Common';

const About = () => {
    return (
        <Common name="About Us " imgsrc={indian} visit="/Contact" btname="Contact Now" content="We create and distribute a blog, podcast, or video series for our audience to generate revenue. Once we have built an engaged following, content we monetize through several revenue streams, increasing their profitability and growth"/>
    )
}
export default About;