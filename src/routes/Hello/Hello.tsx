import { useEffect } from 'react';
import Button from '../../components/Button/Button';
import { useAppDispatch } from '../../store/hooks';
import style from './Hello.module.scss';
import { useNavigate } from 'react-router-dom';
import { clearAll } from '../../store/querySlice';

const Hello = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(clearAll());
  }, []);

  return (
    <div className={style.start}>
      <div className='container'>
        <div className={`${style.startBody} screen-body`}>
          <div className={`${style.startBody__title} screen__title`}>
            Мы найдём фильм <br /> твоей мечты
          </div>
          <div className={`${style.startBody__btns} screen-btns`}>
            <Button
              onClick={() => navigate('/condition')}
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
