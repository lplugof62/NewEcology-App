import React, { useState } from 'react';
import '../styles/mainViews/CategoryCake.css';
import ProductContainer from './pieces/ProductContainer';
import BgVector from './pieces/BgVector';
import CircleLogo from './pieces/CircleLogo';
import CategoryContainer from './pieces/CategoryContainer';
// import { Link } from "react-router-dom";
import BackButton from './pieces/BackButton';
import SocialMedia from './pieces/SocialMedia';
import Order from './mainViews/Order';
import data from './data';
import Total from './pieces/Total';

function BuyCar() {
    const { products } = data;

    const [status, setStatus] = useState(0);

    const [carItems, setCarItems] = useState([]);

    // creating a function to add products to our shopping car
    const onAdd = (product) => {

        const exist = carItems.find(x => x.id === product.id);

        if (exist) {
            setCarItems(carItems.map(x => x.id === product.id ?
                { ...exist, qty: exist.qty + 1 } : x))
        } else {
            setCarItems([...carItems, { ...product, qty: 1 }]);
        }
    }

    // creating a function to add products to our shopping car
    const onRemove = (product) => {

        const exist = carItems.find((x) => x.id === product.id);
        if (exist) {
            if (exist.qty === 1) {
                setCarItems(carItems.filter((x) => x.id !== product.id));
            } else {
                setCarItems(carItems.map(x => x.id === product.id ?
                    { ...exist, qty: exist.qty - 1 } : x));
            }
        }

    }

    const MielesStatus = () => {
        setStatus(0);
    }

    const PolenStatus = () => {
        setStatus(1);
    }

    const PropoleoStatus = () => {
        setStatus(2);
    }

    const OtrosStatus = () => {
        setStatus(3);
    }

    const OrderStatus = () => {
        setStatus(4);
    }

    return (
        <div className='CategoryCakeContainer'>

            <BgVector />

            <div className='Rectangle'>
                <CircleLogo />

                {(status < 4) ?
                    <CategoryContainer
                        Mieles={MielesStatus}
                        Polen={PolenStatus}
                        Propoleo={PropoleoStatus}
                        Otros={OtrosStatus}
                    /> : ''
                }

                <div className='ListContainer'>
                    
                    {products.map((product) => {
                        let counter = 0;
                        carItems.forEach(item => {
                            if (item.id === product.id) {
                                counter = item.qty
                            }
                        });
                        if (status === 0) {
                            return ((product.category === 'Mieles') ?

                                <div>
                                    <ProductContainer
                                        key={product.id}
                                        product={product}
                                        onAdd={onAdd}
                                        onRemove={onRemove}
                                        counter={counter}
                                    />
                                </div> : ''
                            )
                        } else if (status === 1) {
                            return (
                                (product.category === 'Polen') ?
                                    <div>
                                        <ProductContainer
                                            key={product.id}
                                            product={product}
                                            onAdd={onAdd}
                                            onRemove={onRemove}
                                            counter={counter}
                                        />
                                    </div> : ''
                            )
                        } else if (status === 2) {
                            return (
                                (product.category === 'Propoleo') ?
                                    <div>
                                        <ProductContainer
                                            key={product.id}
                                            product={product}
                                            onAdd={onAdd}
                                            onRemove={onRemove}
                                            counter={counter}
                                        />
                                    </div> : ''
                            )
                        } else if (status === 3) {
                            return (
                                (product.category === 'Otros') ?
                                    <div>
                                        <ProductContainer
                                            key={product.id}
                                            product={product}
                                            onAdd={onAdd}
                                            onRemove={onRemove}
                                            counter={counter}
                                        />
                                    </div> : ''
                            )
                        } else {
                            return ('')
                        }
                    })}
                </div>

                {(status === 4) ?
                    <Order carItems={carItems}
                        Mieles={MielesStatus}
                        onAdd={onAdd}
                        onRemove={onRemove}
                    /> : ''
                }

                {(status < 4) ?
                    <BackButton Text='Ver orden' Order={OrderStatus} /> : ''

                }
                <Total carItems={carItems} />
                <SocialMedia />

            </div>
        </div>
    )
}

export default BuyCar;