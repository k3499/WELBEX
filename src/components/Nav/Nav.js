import './Nav.css';

function Nav() {
  return (
    <nav className='header__nav-box'>
      <ul className='header__nav'>
        <li className='header_nav-item'><a href="#" className='header_nav-link'>Услуги</a></li>
        <li className='header_nav-item'><a href="#" className='header_nav-link'>Виджеты</a></li>
        <li className='header_nav-item'><a href="#" className='header_nav-link'>Интеграции</a></li>
        <li className='header_nav-item'><a href="#" className='header_nav-link'>Кейсы</a></li>
        <li className='header_nav-item'><a href="#" className='header_nav-link'>Сертификаты</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
