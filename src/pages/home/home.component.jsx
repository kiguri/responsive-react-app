import React, { useState } from 'react';

import Navbar from '../../components/Navbar/navbar.component';
import Sidebar from '../../components/Sidebar/sidebar.component';
import HeroSection from '../../components/HeroSection/herosection.component';

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
        </div>
    );
};

export default Home;