import React from 'react';
import Image from 'react-bootstrap/Image'
import WelcomeImg from '../../img/cakes/welcome2.png';
import '../../styles/mainViews/Home.css';
import { Link } from "react-router-dom";

import BgVector from '../pieces/BgVector';
import SocialMedia from '../pieces/SocialMedia';
import CircleLogo from '../pieces/CircleLogo';
import BackButton from '../pieces/BackButton';

function Home () {
    return (
        <div className='HomeContainer'>
            <BgVector />
            <div className='RectangleHome'>
                <CircleLogo />
                <div className='containerImgWelcome'>
                    <Image src={WelcomeImg} alt='WelcomeImg' className='WelcomeImg'/>
                    <h2 className='TitleDescription'>Bienvenido a New Ecology</h2>
                </div>
                <SocialMedia />

                <Link to="/Menu" className='LinkMenu'>
                    <BackButton Text='Explorar' />
                </Link>
                
            </div>
        </div>
    )
}

export default Home;