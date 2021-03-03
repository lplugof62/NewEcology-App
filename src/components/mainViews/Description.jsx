import React from 'react';
import '../../styles/mainViews/Description.css';
import Image from 'react-bootstrap/Image'
import { Link } from "react-router-dom";

import Miel from '../../img/cakes/miel.JPG';

import SocialMedia from '../pieces/SocialMedia';
import CircleLogo from '../pieces/CircleLogo';
import BackButton from '../pieces/BackButton';
import BgVector from '../pieces/BgVector';
import TitleDescription from '../pieces/TitleDescription';
import ProductPrice from '../pieces/ProductPrice';

function Description() {
    return (
        <div className='HomeContainer'>

            <BgVector />

            <div className='Rectangle'>

                <CircleLogo />

                <TitleDescription Title='Descripción del producto' />

                <div className='DescriptionContainer'>
                    <Image src={Miel} alt='Pastel Ibague' className='ImgProduct' roundedCircle />
                    <h1 className='ProductTitle'>Miel 350g</h1>
                    <p className='DescriptionText'>
                        Lorem Ipsum es simplemente el texto de relleno de las imprentas y
                        archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
                        de las industrias desde el año 1500, cuando un impresor.
                    </p>
                    <ProductPrice />
                </div>

                <SocialMedia />

                <Link to="/MenuCake" className='LinkMenu'>
                    <BackButton Text='Regresar' />
                </Link>
            </div>
        </div>
    )
}

export default Description;