import React from 'react';
import '../../styles/pieces/CategoryContainer.css';

import CategoryCircle from '../pieces/CategoryCircle';

import Mieles from '../../img/icons/mielIcon.png';
import Polen from '../../img/icons/polenIcon.png';
import Propoleo from '../../img/icons/propoleoIcon.png';
import Otros from '../../img/icons/otrosIcon.png';

function CategoryContainer (props) {
    return (
        <div className='CategoryContainer'>
            <div className='LinkCategory'>
                <CategoryCircle PropFunction={props.Mieles} ImgURL={Mieles}/>
            </div>

            <div className='LinkCategory'>
                <CategoryCircle PropFunction={props.Polen} ImgURL={Polen}/>
            </div>

            <div className='LinkCategory'>
                <CategoryCircle PropFunction={props.Propoleo} ImgURL={Propoleo}/>
            </div>

            <div className='LinkCategory'>
                <CategoryCircle PropFunction={props.Otros} ImgURL={Otros}/>
            </div>
            
        </div>
    )
}

export default CategoryContainer;