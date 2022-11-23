import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className='footer__wrapper'>
        <div className="footer__block-about">
          <p className="footer__title">О компании</p>
          <ul className="footer__menu">
            <li className="footer__menu-item">
              <a href="#" className="footer__menu-link">Партнёрская программа</a>
            </li>
            <li className="footer__menu-item">
              <a href="#" className="footer__menu-link">Вакансии</a>
            </li>
          </ul>
        </div>
        <div className="footer__block-menu">
          <p className="footer__title">Меню</p>
          <ul className="footer__menu footer__menu-list">
            <li className="footer__menu-item">
              <a href="#" className="footer__menu-link">Расчёт стоимости</a>
            </li>
            <li className="footer__menu-item">
              <a href="#" className="footer__menu-link">Кейсы</a>
            </li>
            <li className="footer__menu-item">
              <a href="#" className="footer__menu-link">Услуги</a>
            </li>
            <li className="footer__menu-item">
              <a href="#" className="footer__menu-link">Благодарственные письма</a>
            </li>
            <li className="footer__menu-item">
              <a href="#" className="footer__menu-link">Виджеты</a>
            </li>
            <li className="footer__menu-item">
              <a href="#" className="footer__menu-link">Сертификаты</a>
            </li>
            <li className="footer__menu-item">
              <a href="#" className="footer__menu-link">Интеграции</a>
            </li>
            <li className="footer__menu-item">
              <a href="#" className="footer__menu-link">Блог на Youtube</a>
            </li>
            <li className="footer__menu-item">
              <a href="#" className="footer__menu-link">Наши клиенты</a>
            </li>
            <li className="footer__menu-item">
              <a href="#" className="footer__menu-link">Вопрос / Ответ</a>
            </li>
          </ul>
        </div>
        <div className="footer__block-contacts">
          <p className="footer__title">Контакты</p>
          <ul className="footer__menu">
            <li className="footer__menu-item">
              <a href="tel:+75555555555" className='footer__menu-link'>+7 555 555-55-55</a>
            </li>
            <li className="footer__menu-item-contacts">
              <a href='#' className='footer__menu-link-social social-telegram'>Телеграмм</a>
              <a href='#' className='footer__menu-link-social social-viber'>Viber</a>
              <a href='#' className='footer__menu-link-social social-whatsup'>Whatsup</a>
            </li>
            <li className="footer__menu-item footer__address">Москва, Путевой проезд 3с1, к 902</li>
          </ul>
        </div>
      </div>
      <p className="footer__credits">©WELBEX 2022. Все права защищены.</p>
      <a href="#" className="footer__credits">Политика конфиденциальности</a> 
    </footer>
  );
}

export default Footer;
