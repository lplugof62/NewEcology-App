import React from 'react';
import '../../styles/pieces/SocialMedia.css';
import Image from 'react-bootstrap/Image'
import Facebook from '../../img/icons/facebook.svg';
import Instagram from '../../img/icons/instagram.svg';

function SocialMedia () {
    return (
        <footer className='IconContainer'>
            <a href="https://www.facebook.com/newecologysas/" target="_blank" rel="noreferrer"><Image src={Facebook} alt='FacebookIcon' className='Icon'/></a>
            <a href="https://www.instagram.com/newecologysas/?hl=es-la" target="_blank" rel="noreferrer"><Image src={Instagram} alt='InstagramIcon' className='Icon'/></a>
        </footer>
    )
}

export default SocialMedia;