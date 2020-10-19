import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../Button/button.styles';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './herosection.styles'

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Everyday Life is Changing</HeroH1>
                <HeroP>Sign up and start your month free now with $300 in credit towards your next payment</HeroP>
                <HeroBtnWrapper>
                    <Button
                        to='signup'
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        dark
                        primary
                    >
                        Get started { hover ? <ArrowForward /> : <ArrowRight /> }
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;