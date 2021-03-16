import React from 'react';
import '../../styles/pieces/CategoryCircle.css';
// import Image from 'react-bootstrap/Image';

function CategoryCircle(props) {
    return (
        <div className='CategoryCircle' onClick={props.PropFunction} alt='IconCategory'>
            <p className='CategoryName'>{props.Category}</p>
        </div>
    )
}

export default CategoryCircle;