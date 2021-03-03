import React from 'react';
import '../../styles/mainViews/Order.css';
import Image from 'react-bootstrap/Image'
import Whatsapp from '../../img/icons/Whatsapp.svg';
import Bee from '../../img/icons/bee.png';
import PolenIcon from '../../img/icons/polenIcon.png';
import CarImage from '../../img/icons/CarImage.png';

function Order(props) {

    const { carItems, onAdd, onRemove } = props;

    const itemsPrice = carItems.reduce((a, c) => a + c.pricesmall * c.qty, 0);

    let showTotal = (new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }).format(itemsPrice));

    let waMsj = '';

    //function tha builds the whatsapp url
    const waString = () => {
        let str = '';
        //for every item in the order creates a string and adds thas string to str
        carItems.forEach(item => {
            if (item.qty !== 0) {
                let subst = `${item.name}%20(${item.qty})%20subtotal:$${item.qty * item.pricesmall}%20`;
                str += subst;
            }
        }
        )
        //add the string to whatsapp url
        let waS = `https://wa.me/573222412990?text=${str}`
        //replaces all spaces for %20 that is a space in url
        waS = waS.replace(/ /g, '%20');
        ;
        //set the url with the total
        waMsj = `${waS}%20Total%20sin%20domicilio:%20$${showTotal}`
        //returns the url 
        return waMsj;
    }

    return (

        <div>

            <Image src={Bee} alt='Bee' className='BeeImg' />

            <div className='TotalListContainer'>
                <Image src={PolenIcon} alt='Bee' className='PolenImg' />
                <div className="divCarImage">
                    <Image src={CarImage} alt='CarDomicile' className='DomicileImg' />
                    <p className='TextDomicile'>Envíos a todo el país. valor desde $6.000 en Bogotá.
                        Por compras mayores a $200.000 tu envío es completamente gratis.</p>
                </div>
                <div className='TotalPriceContainer'>
                    <p className='TotalAmount'>Total: {showTotal}</p>
                </div>
                <div className='OrderListContainer'>
                    {carItems.length === 0 &&
                        <div className='TextCar'>
                            Aún no tienes productos... ¡Agrega productos al carro!
                        </div>}
                    <ul className='ShoppingList'>

                        {carItems.map((item) => (
                            <ul key={item.id}>
                                <div className='OrderButtonContainer'>
                                    {item.qty} {item.name}. ${item.pricesmall * item.qty}
                                    <button onClick={() => onRemove(item)} className='buttonOrder'>-</button>
                                    <button onClick={() => onAdd(item)} className='buttonOrder'>+</button>

                                </div>
                            </ul>
                        ))}
                    </ul>
                </div>
                <a href={waString()} className='WhatsappContainer'>
                    <Image src={Whatsapp} alt='Whatsapp' className='Whatsapp' />
                    <p className='Enviar'>Enviar</p>
                </a>
            </div>
            <div className='ComebackContainer' onClick={props.Mieles}>
                <div className='RegresarText'>Regresar</div>
                <div className='TriangleContainer'>
                    <div className='Triangle'></div>
                </div>
            </div>
        </div>
    )
}

export default Order;