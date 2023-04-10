import copySvg from '../../assets/img/icons/copySvg';
import style from './Card.module.scss';

interface ICard {
  className: string;
  title: string;
  duration: string;
  genre: string;
  rating: string | number;
  year: string | number;
  director: string;
  actors: string;
  description: string;
}

const Card = ({
  className,
  title,
  duration,
  genre,
  rating,
  year,
  director,
  actors,
  description,
}: ICard) => {
  return (
    <div className={`${style.card} ${className}`}>
      <div className={style.cardTop}>
        <div className={style.cardTop__title}>
          {title}
          <span className={style.copy}>{copySvg}</span>
        </div>
        <div className={style.cardTop__duration}>{duration}</div>
      </div>
      <div className={style.cardInfo}>
        <div className={style.cardInfo__row}>
          <div className={style.cardInfo__item}>
            <div className={style.cardInfo__itemLabel}>Жанр</div>
            <div className={style.cardInfo__itemValue}>{genre}</div>
          </div>
          <div className={style.cardInfo__item}>
            <div className={style.cardInfo__itemLabel}>Рейтинг</div>
            <div className={style.cardInfo__itemValue}>{rating}/10</div>
          </div>
          <div className={style.cardInfo__item}>
            <div className={style.cardInfo__itemLabel}>Год выпуска</div>
            <div className={style.cardInfo__itemValue}>{year}</div>
          </div>
          <div className={style.cardInfo__item}>
            <div className={style.cardInfo__itemLabel}>Режиссер</div>
            <div className={style.cardInfo__itemValue}>{director}</div>
          </div>
        </div>
        <div className={style.cardInfo__row}>
          <div className={style.cardInfo__item}>
            <div className={style.cardInfo__itemLabel}>Главные актеры</div>
            <div className={style.cardInfo__itemValue}>{actors}</div>
          </div>
        </div>
      </div>
      <div className={style.card__disc}>{description}</div>
    </div>
  );
};

export default Card;
