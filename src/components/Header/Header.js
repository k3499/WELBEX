import './Header.css';
import Nav from '../Nav/Nav'

function Header() {
  return (
    <header className="header">
      <div className='header__logo-box'>
        <a href='#' className='header__logo'>Welbex</a>
        <p className='heder__sub-logo'>крупный интегратор CRM в Росcии и ещё 8 странах</p>
      </div>
      <Nav />
      <a href="tel:+75555555555" className='header__phone'>+7 555 555-55-55</a>
      <ul className='header__social'>
        <a href='#' className='header__social-icons social-telegram'>Телеграмм</a>
        <a href='#' className='header__social-icons social-viber'>Viber</a>
        <a href='#' className='header__social-icons social-whatsup'>Whatsup</a>
      </ul>
    </header>
  );
}

export default Header;
