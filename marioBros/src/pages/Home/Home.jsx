import './Home.css'
import { Link } from 'react-router-dom';
import Informations from '../../components/Informations/Informations';
import RightImage from '../../components/RightImage/RightImage';

export default function Home() {
    return (
        <div className='primary-container'>

            <Informations className='leftComponent'/>

            <RightImage className='rightComponent'/>

            <figure className='wpp-logo'>
                <a href="https://wa.me/5532985099191?text=Eii,%20eu%20vim%20do%20link%20do%20seu%20site%20do%20Mario" target="_blank" rel="noopener noreferrer" aria-label="Entre em contato com o WhatsApp">
                    <img src="./whatsapp.png" alt="wpp-logo" />
                </a>
            </figure>

        </div>
    )
}