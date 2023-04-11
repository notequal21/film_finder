import { useEffect } from 'react';
import Button from '../../components/Button/Button';
import { useAppDispatch } from '../../store/hooks';
import style from './Hello.module.scss';
import { useNavigate } from 'react-router-dom';
import { clearAll } from '../../store/querySlice';
import { clearStepsData, setType } from '../../store/stepsSlice';

const Hello = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const clearState = () => {
    dispatch(clearAll());
    dispatch(clearStepsData());
  };

  useEffect(() => {
    clearState();
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
              onClick={() => {
                clearState();
                navigate('/condition');
                dispatch(setType('condition'));
              }}
              className={`${style.startBody__btnsItem} screen-btns__item`}
            >
              Поиск по критериям
            </Button>
            <Button
              onClick={() => {
                clearState();
                navigate('/emotions');
                dispatch(setType('emotions'));
              }}
              className={`${style.startBody__btnsItem} screen-btns__item`}
            >
              Поиск по эмоциям
            </Button>
            <Button
              onClick={() => {
                clearState();
                navigate('/similar');
                dispatch(setType('similar'));
              }}
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
