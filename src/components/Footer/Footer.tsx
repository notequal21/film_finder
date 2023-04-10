import style from './Footer.module.scss';

// img imports
import img from '../../assets/img/lights.png';

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footer__lights}>
        <img src={img} alt='' />
      </div>
      <div className='container'>
        <div className={style.footerBody}>
          <div className={style.footerBody__cr}>© 2023 FilmFinder</div>
          <div className={style.footerBody__links}>
            <a href='' className={style.footerBody__linksItem}>
              Политика конфиденциальности
            </a>
            <span>|</span>
            <a href='' className={style.footerBody__linksItem}>
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
