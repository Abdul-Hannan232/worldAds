'use client'

import React, { useState, useEffect } from 'react';
import NavContent from './NavContent';

const Header = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isHeaderFixed, setIsHeaderFixed] = useState(false);

    const handleDrawerToggle = () => {
        setIsDrawerOpen(!isDrawerOpen);
        console.log('Drawer open state:', isDrawerOpen); 
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            if (scrollPosition > 10) {
                setIsHeaderFixed(true);
            } else {
                setIsHeaderFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); 

    return (
        <>
            <div className={`fixed ${isHeaderFixed ? 'top-0' : 'top-12'} gradient-color pr-5 p-10 pl-5 sm:pr-16  right-0 left-0 sm:pl-16 h-14 z-40 flex justify-between items-center bg-transparent`}>
                <img src="./assets/images/logo.png" alt="Logo" />

                <button 
                    className="bg-[#FFFFFF1A] border-2 border-white px-6 py-3 hover:border rounded-[100px]" 
                    type="button" 
                    onClick={handleDrawerToggle} 
                >
                    <img src="./assets/images/bars.svg" alt="Menu" />
                </button>
            </div>

            {/* {isDrawerOpen && <NavContent />} */}
        </>
    );
};

export default Header;
