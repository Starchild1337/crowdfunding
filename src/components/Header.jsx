import React from 'react';
import logo from '../images/logo.svg'
import hero from '../images/hero-desktop.jpg'
import hamburger from '../images/icon-hamburger.svg'
import closeMenu from '../images/icon-close-menu.svg'
import { ModalContext } from '../App';

const Header = () => {
    const {navModal, setNavModal, isModalOpen, setIsModalOpen} = React.useContext(ModalContext)

    const handleNavModal = () => {
        setIsModalOpen(true)
        setNavModal(!navModal)
        
        if(isModalOpen) {
            setIsModalOpen(false)
        }
    }
    
    return (
        <header className='header'>
            <img src={hero} alt="hero" className='hero-img' />
            <nav className='nav'>
                <div className='logo'>
                    <img src={logo} alt="logo" />
                </div>
                <ul className='nav-links'>
                    <li>About</li>
                    <li>Discover</li>
                    <li>Get Started</li>
                </ul>
                <button className='btn-hamburger' onClick={handleNavModal}>
                    {navModal === false && <img src={hamburger} alt="hamburger menu" />}
                    {navModal && <img src={closeMenu} alt="close menu" />}
                </button>
            </nav>
        </header>
    );
};

export default Header;