import InputSearch from '../../components/InputSearch/InputSearch';
import style from './Similar.module.scss';

const Similar = () => {
  return (
    <div className={style.similar}>
      <div className='container'>
        <div className={`${style.startBody} screen-body`}>
          <div className={`screen__text ${style.similar__text}`}>
            Привет! Я могу помочь тебе выбрать фильм. Для этого ответь на
            несколько вопросов, чтобы я мог подобрать для тебя подходящий
            вариант. Напиши название фильма, на который должны быть похожи
            результаты
          </div>
          <InputSearch
            className={style.similar__input}
            placeholder={'Введите название фильма'}
          />
        </div>
      </div>
    </div>
  );
};

export default Similar;
