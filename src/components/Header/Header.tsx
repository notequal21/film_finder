import style from './Header.module.scss';

// img imports
import logo from '../../assets/img/logo.svg';

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.header__bgElem01}></div>
      <div className={style.header__bgElem02}></div>
      <div className='container'>
        <div className={style.headerBody}>
          <div className={style.headerBody__logo}>
            <img src={logo} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
