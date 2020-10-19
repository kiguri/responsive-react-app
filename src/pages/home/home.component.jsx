import React, { useState } from 'react';

import Navbar from '../../components/Navbar/navbar.component';
import Sidebar from '../../components/Sidebar/sidebar.component';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
        </div>
    );
};

export default Home;