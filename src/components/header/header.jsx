import React from 'react';
import Tilt from 'react-vanilla-tilt'
import empresa from '../../assets/empresa.png'
import './header.css'

const Header = () => {
    return (
        <section className='header-container'>
            <Tilt className='tilt'
                options={{ scale: 1 }}
                style={{
                    backgroundColor: "transparent",
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <img className='project-img' src={empresa} alt="" />
                <div className='project-title'>DARWIN</div>
            </Tilt>
        </section>
    );
}

export default Header;
