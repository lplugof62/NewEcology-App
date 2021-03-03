import React from 'react';
import '../../styles/pieces/CircleLogo.css';
import Image from 'react-bootstrap/Image'
import Logo from '../../img/logo.jpg';

function CircleLogo () {
    return (
        <div className='HalfCircle'>
            <Image src={Logo} alt='Pettit' className='logo' roundedCircle />
        </div>
    )
}

export default CircleLogo;