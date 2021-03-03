import React, { useState } from 'react';
import '../../styles/pieces/CategoryPrice.css';

function CategoryPrice (props) {

    const [counter, setCounter] = useState(0);

    const Plus = () => {
        setCounter(prevCounter => {
            return prevCounter + 1;
        });
    }

    const Minus = () => {
        setCounter(prevCounter => {
            if(prevCounter > 0 ) {
                prevCounter = prevCounter - 1;
            }
            return prevCounter
        });
    }

    return (
        <div className='ContainerPrice'>
            <p className='ProductPrice'>${props.Price}</p>
            <div className='ContainerCounter'>
                <button className='PlusCounter' onClick={Plus}>+</button>
                <div className='CircleCounter'>
                    <p className='NumberCounter'>{counter}</p>
                </div>
                <button className='MinusCounter' onClick={Minus}>-</button>
            </div>
        </div>
)
}

export default CategoryPrice;