// @flow
import React from 'react';
import heroGraphicBg from './Hero-Graphic-BG.png';
import heroGraphicBg2x from './Hero-Graphic-BG@2x.png';
import heroGraphicFg from './Hero-Graphic-FG.svg';
import dots from './Dots.png';
import dots2x from './Dots@2x.png';
import grit from './Grit.png';
import grit2x from './Grit@2x.png';
import './style.scss';

const Hero = () => (
    <section className="hero">
        <div className="hero__container">
            <div className="hero__text">
                <h1 className="hero__headline">Jeremy Tinianow is a Designer&nbsp;&&nbsp;Maker</h1>
                <h2 className="hero__subheadline h1">Currently, Digital Product Designer at Barbershop in Denver, CO.</h2>
            </div>
            <div className="hero__graphic-wrapper">
                <img className="hero__graphic" src={heroGraphicBg} srcSet={`${heroGraphicBg}, ${heroGraphicBg2x} 2x`} width={334} alt="squiggle line" />
                <img className="hero__graphic" src={heroGraphicFg} width={344} alt="impossible illustration" />
            </div>
        </div>
        <img className="hero__bg bg__dots" src={dots} srcSet={`${dots}, ${dots2x} 2x`} alt="dots" width={131} />
        <img className="hero__bg bg__grit" src={grit} srcSet={`${grit}, ${grit2x} 2x`} alt="grit" width={265} />
    </section>
)


export default Hero;