import Image from 'react-bootstrap/Image';

import Miel1000 from '../img/cakes/Miel1000.JPG';
import MielMulti1000 from '../img/cakes/MielMulti1000.JPG';
import MielMulti300 from '../img/cakes/MielMulti300.JPG';
import MielPremium500 from '../img/cakes/MielPremium500.JPG';
import MielPremium340 from '../img/cakes/MielPremium340.JPG';
import Miel600 from '../img/cakes/Miel600.JPG';
import MielMulti600 from '../img/cakes/MielMulti600.JPG';
import Miel340 from '../img/cakes/Miel340.JPG';
import Miel125 from '../img/cakes/Miel125.JPG';
import MielMulti125 from '../img/cakes/MielMulti125.JPG';
import MielFrutosSeco from '../img/cakes/MielFrutosSeco.JPG';
import MielEspecias from '../img/cakes/miel.JPG';

import Polen340 from '../img/cakes/Polen340.JPG';
import Polen175 from '../img/cakes/Polen175g.JPG';

import Propoleo25 from '../img/cakes/Propoleo25.JPG';
import Propoleo from '../img/cakes/Propoleo.JPG';
import Propoleo1 from '../img/cakes/Propoleo1.jpg';

import Cerveza from '../img/cakes/CervezaMiel.JPG';
import JabonMiel from '../img/cakes/JabonMiel.JPG';
import Bloqueador from '../img/cakes/Bloqueador.JPG';
import Lipstick from '../img/cakes/Lipstick.JPG';
import Hidromiel from '../img/cakes/Hidromiel1.JPG';

import JaleaReal from '../img/cakes/JaleaReal.JPG';
import JaleaCapsulas from '../img/cakes/JaleaCapsulas.JPG';
import Apitoxina from '../img/cakes/Apitoxina.JPG';
import Caramelo from '../img/cakes/Caramelo.JPG';
import Cera from '../img/cakes/Cera.JPG';
import CeraFiltrada from '../img/cakes/CeraFiltrafa.JPG';
import CremaApitoxina from '../img/cakes/CremaApitoxina.JPG';
import Desodorante from '../img/cakes/Desodorante.JPG';

const data = {
    products: [
        {
            id: 'Miel1',
            name: 'Miel de abejas 1kg (Acacia)',
            pricesmall: 27000,
            pricemedium: 27000,
            pricebig: 270,
            amount: 0,
            category: 'Mieles', 
            Image: <Image src={Miel1000} alt='Miel1' className='CakeImage'/>
        },
        {
            id: 'Miel2',
            name: 'Miel de abejas 1kg (Multifloral)',
            pricesmall: 32000,
            pricemedium: 32000,
            pricebig: 320,
            amount: 0,
            category: 'Mieles', 
            Image: <Image src={MielMulti1000} alt='Miel2' className='CakeImage'/>
        },
        {
            id: 'Miel3',
            name: 'Miel de abejas 600g (Acacia)',
            pricesmall: 20000,
            pricemedium: 20000,
            pricebig: 200,
            amount: 0,
            category: 'Mieles', 
            Image: <Image src={Miel600} alt='Miel3' className='CakeImage'/>
        },
        {
            id: 'Miel4',
            name: 'Miel de abejas 600g (Multifloral)',
            pricesmall: 23000,
            pricemedium: 23000,
            pricebig: 230,
            amount: 0,
            category: 'Mieles', 
            Image: <Image src={MielMulti600} alt='Miel4' className='CakeImage'/>
        },
        {
            id: 'Miel5',
            name: 'Miel de abejas 300g (Acacia)',
            pricesmall: 12000,
            pricemedium: 12000,
            pricebig: 120,
            amount: 0,
            category: 'Mieles', 
            Image: <Image src={Miel340} alt='Miel5' className='CakeImage'/>
        },
        {
            id: 'Miel6',
            name: 'Miel de abejas 300g (Multifloral)',
            pricesmall: 14000,
            pricemedium: 14000,
            pricebig: 140,
            amount: 0,
            category: 'Mieles', 
            Image: <Image src={MielMulti300} alt='Miel6' className='CakeImage'/>
        },
        {
            id: 'Miel7',
            name: 'Miel de abejas 125g (Acacia)',
            pricesmall: 6000,
            pricemedium: 6000,
            pricebig: 60,
            amount: 0,
            category: 'Mieles', 
            Image: <Image src={Miel125} alt='Miel7' className='CakeImage'/>
        },
        {
            id: 'Miel8',
            name: 'Miel de abejas 125g (Multifloral)',
            pricesmall: 7000,
            pricemedium: 7000,
            pricebig: 70,
            amount: 0,
            category: 'Mieles', 
            Image: <Image src={MielMulti125} alt='Miel8' className='CakeImage'/>
        },
        {
            id: 'Miel9',
            name: 'Miel con frutos secos',
            pricesmall: 8000,
            pricemedium: 8000,
            pricebig: 80,
            amount: 0,
            category: 'Mieles', 
            Image: <Image src={MielFrutosSeco} alt='Miel9' className='CakeImage'/>
        },
        {
            id: 'Miel10',
            name: 'Miel con especias',
            pricesmall: 8000,
            pricemedium: 8000,
            pricebig: 80,
            amount: 0,
            category: 'Mieles', 
            Image: <Image src={MielEspecias} alt='Miel10' className='CakeImage'/>
        },
        {
            id: 'Miel11',
            name: 'Miel Premium 340g (Acacia)',
            pricesmall: 20000,
            pricemedium: 20000,
            pricebig: 200,
            amount: 0,
            category: 'Mieles', 
            Image: <Image src={MielPremium340} alt='Miel11' className='CakeImage'/>
        },
        {
            id: 'Miel12',
            name: 'Miel Premium 500g (Multifloral)',
            pricesmall: 28000,
            pricemedium: 28000,
            pricebig: 280,
            amount: 0,
            category: 'Mieles', 
            Image: <Image src={MielPremium500} alt='Miel12' className='CakeImage'/>
        },
        {
            id: 'Polen1',
            name: 'Polen Apícola 340g',
            pricesmall: 24000,
            pricemedium: 24000,
            pricebig: 240,
            amount: 0,
            category: 'Polen', 
            Image: <Image src={Polen340} alt='Personaliza tu torta' className='CakeImage'/>
        },
        {
            id: 'Polen2',
            name: 'Polen Apícola 175g',
            pricesmall: 15000,
            pricemedium: 15000,
            pricebig: 150,
            amount: 0,
            category: 'Polen', 
            Image: <Image src={Polen175} alt='Torta de Chocolate' className='CakeImage'/>
        },
        {
            id: 'Propoleo1',
            name: 'Propóleo gotero 25ml',
            pricesmall: 24000,
            pricemedium: 24000,
            pricebig: 240,
            amount: 0,
            category: 'Propoleo', 
            Image: <Image src={Propoleo25} alt='CupCake Fondant' className='CakeImage'/>
        },
        {
            id: 'Propoleo2',
            name: 'Propóleo con miel 1000g',
            pricesmall: 50000,
            pricemedium: 50000,
            pricebig: 500,
            amount: 0,
            category: 'Propoleo', 
            Image: <Image src={Propoleo1} alt='CupCake Crema' className='CakeImage'/>
        },
        {
            id: 'Propoleo3',
            name: 'Propóleo con miel 680g',
            pricesmall: 38000,
            pricemedium: 38000,
            pricebig: 380,
            amount: 0,
            category: 'Propoleo', 
            Image: <Image src={Propoleo} alt='CupCake Crema' className='CakeImage'/>
        },
        {
            id: 'Propoleo4',
            name: 'Propóleo con miel 340g',
            pricesmall: 24000,
            pricemedium: 24000,
            pricebig: 240,
            amount: 0,
            category: 'Propoleo', 
            Image: <Image src={Propoleo} alt='CupCake Crema' className='CakeImage'/>
        },
        {
            id: 'Otros1',
            name: 'Jalea real 10 cc',
            pricesmall: 70000,
            pricemedium: 70000,
            pricebig: 700,
            amount: 0,
            category: 'Otros',
            Image: <Image src={JaleaReal} alt='JaleaReal' className='CakeImage'/>
        },
        {
            id: 'Otros2',
            name: 'Jalea real cápsulas',
            pricesmall: 45000,
            pricemedium: 45000,
            pricebig: 450,
            amount: 0,
            category: 'Otros',
            Image: <Image src={JaleaCapsulas} alt='JaleaReal' className='CakeImage'/>
        },
        {
            id: 'Otros3',
            name: 'Cera de abejas 1Kg',
            pricesmall: 60000,
            pricemedium: 60000,
            pricebig: 600,
            amount: 0,
            category: 'Otros',
            Image: <Image src={Cera} alt='JaleaReal' className='CakeImage'/>
        },
        {
            id: 'Otros4',
            name: 'Cera de abejas ultrafiltrada 1Kg',
            pricesmall: 70000,
            pricemedium: 70000,
            pricebig: 700,
            amount: 0,
            category: 'Otros',
            Image: <Image src={CeraFiltrada} alt='JaleaReal' className='CakeImage'/>
        },
        {
            id: 'Otros5',
            name: 'Crema de apitoxina',
            pricesmall: 70000,
            pricemedium: 70000,
            pricebig: 700,
            amount: 0,
            category: 'Otros',
            Image: <Image src={CremaApitoxina} alt='JaleaReal' className='CakeImage'/>
        },
        {
            id: 'Otros6',
            name: 'Apitoxina oral 25 ml',
            pricesmall: 70000,
            pricemedium: 70000,
            pricebig: 700,
            amount: 0,
            category: 'Otros',
            Image: <Image src={Apitoxina} alt='Apitoxina' className='CakeImage'/>
        },
        {
            id: 'Otros7',
            name: 'Caramelos de miel',
            pricesmall: 1000,
            pricemedium: 1000,
            pricebig: 10,
            amount: 0,
            category: 'Otros',
            Image: <Image src={Caramelo} alt='Caramelo' className='CakeImage'/>
        },
        {
            id: 'Otros8',
            name: 'Cerveza de miel',
            pricesmall: 7500,
            pricemedium: 7500,
            pricebig: 75,
            amount: 0,
            category: 'Otros',
            Image: <Image src={Cerveza} alt='Cerveza de miel' className='CakeImage'/>
        },
        {
            id: 'Otros9',
            name: 'Hidromiel 750 ml',
            pricesmall: 25000,
            pricemedium: 25000,
            pricebig: 250,
            amount: 0,
            category: 'Otros',
            Image: <Image src={Hidromiel} alt='JaleaReal' className='CakeImage'/>
        },
        {
            id: 'Otros10',
            name: 'Jabón de miel',
            pricesmall: 6000,
            pricemedium: 6000,
            pricebig: 60,
            amount: 0,
            category: 'Otros',
            Image: <Image src={JabonMiel} alt='JaleaReal' className='CakeImage'/>
        },
        {
            id: 'Otros11',
            name: 'Lipstick de cera de abejas',
            pricesmall: 12000,
            pricemedium: 12000,
            pricebig: 120,
            amount: 0,
            category: 'Otros',
            Image: <Image src={Lipstick} alt='JaleaReal' className='CakeImage'/>
        },
        {
            id: 'Otros12',
            name: 'Bloqueador solar cera spf 50',
            pricesmall: 30000,
            pricemedium: 30000,
            pricebig: 300,
            amount: 0,
            category: 'Otros',
            Image: <Image src={Bloqueador} alt='JaleaReal' className='CakeImage'/>
        },
        {
            id: 'Otros13',
            name: 'Desodorante cera de abejas',
            pricesmall: 12000,
            pricemedium: 12000,
            pricebig: 120,
            amount: 0,
            category: 'Otros',
            Image: <Image src={Desodorante} alt='Desodorante' className='CakeImage'/>
        }
    ]
}

export default data;