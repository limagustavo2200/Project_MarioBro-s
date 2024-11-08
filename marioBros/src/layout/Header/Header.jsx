import './Header.css'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <nav className="navbar-container">
            <figure>
                <img src="./logo-header.png" alt="logo-mario" width={65} height={65} />
            </figure>
            <div className='links-container'>
                <Link className='link' to='/' >Home</Link>
                <Link className='link' to=''>Fale conosco</Link>
                <Link className='link' to=''>Nossos serviços</Link>
            </div>
        </nav>
    )
}