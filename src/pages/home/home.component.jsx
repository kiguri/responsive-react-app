import React, { useState } from 'react';

import Navbar from '../../components/Navbar/navbar.component';
import Sidebar from '../../components/Sidebar/sidebar.component';
import HeroSection from '../../components/HeroSection/herosection.component';
import InfoSection from '../../components/InfoSection/info.component';

import {homeObjOne, homeObjTwo, homeObjThree } from '../../components/InfoSection/info.data';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection />
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjThree}/>
        </div>
    );
};

export default Home;