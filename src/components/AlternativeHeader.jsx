import logo from '../assets/Portfolio_logo.png';
import { Link } from 'react-router-dom';

export default function AlternativeHeader(){
    window.onload = function(){
        
        const menu_btn = document.querySelector('.hamburger');
        const mobile_menu = document.querySelector('.mobile-nav');

        menu_btn.addEventListener('click', function (){
            menu_btn.classList.toggle('is-active');
            mobile_menu.classList.toggle('is-active');
        })
    }
    return (
        <>
            <header>
                <div className="nav-container">
                    <img alt='logo' src={logo} className='logo'/>
                    <nav className="desktop-nav">
                        <Link className="nav-link" href="index.html">Hjem</Link>
                        <Link className="nav-link" href="voresprojekter.html">Vores Projekter</Link>
                        <Link className="nav-link" href="bliveinspireret.html">Bliv Inspireret</Link>
                        <Link className="nav-link" href="omos.html">Om Os</Link>
                        <Link className="nav-link" href="kontakt.html">Kontakt</Link>
                    </nav>
                    <button className="hamburger">
                        <div className="bar"></div>
                    </button>
                </div>
            </header>
            <nav className="mobile-nav">
                <Link href="index.html">Hjem</Link>
                <Link href="voresprojekter.html">Vores Projekter</Link>
                <Link href="bliveinspireret.html">Bliv Inspireret</Link>
                <Link href="omos.html">Om Os</Link>
                <Link href="kontakt.html">Kontakt</Link>
            </nav>
        </>
    )
}