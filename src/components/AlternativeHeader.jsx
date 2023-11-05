import logo from '../assets/Portfolio_logo.png';

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
                        <a className="nav-link" href="index.html">Hjem</a>
                        <a className="nav-link" href="voresprojekter.html">Vores Projekter</a>
                        <a className="nav-link" href="bliveinspireret.html">Bliv Inspireret</a>
                        <a className="nav-link" href="omos.html">Om Os</a>
                        <a className="nav-link" href="kontakt.html">Kontakt</a>
                    </nav>
                    <button className="hamburger">
                        <div className="bar"></div>
                    </button>
                </div>
            </header>
            <nav className="mobile-nav">
                <a href="index.html">Hjem</a>
                <a href="voresprojekter.html">Vores Projekter</a>
                <a href="bliveinspireret.html">Bliv Inspireret</a>
                <a href="omos.html">Om Os</a>
                <a href="kontakt.html">Kontakt</a>
            </nav>
        </>
    )
}