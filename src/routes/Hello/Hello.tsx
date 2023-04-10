import Button from '../../components/Button/Button';
import style from './Hello.module.scss';
import { useNavigate } from 'react-router-dom';

const Hello = () => {
  const navigate = useNavigate();

  return (
    <div className={style.start}>
      <div className='container'>
        <div className={`${style.startBody} screen-body`}>
          <div className={`${style.startBody__title} screen__title`}>
            Мы найдём фильм <br /> твоей мечты
          </div>
          <div className={`${style.startBody__btns} screen-btns`}>
            <Button
              className={`${style.startBody__btnsItem} screen-btns__item`}
            >
              Поиск по критериям
            </Button>
            <Button
              onClick={() => navigate('/emotions')}
              className={`${style.startBody__btnsItem} screen-btns__item`}
            >
              Поиск по эмоциям
            </Button>
            <Button
              onClick={() => navigate('/similar')}
              transparent
              className={`${style.startBody__btnsItem} screen-btns__item`}
            >
              Поиск похожих фильмов
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hello;
