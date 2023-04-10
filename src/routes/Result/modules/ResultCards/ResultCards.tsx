import Card from '../../../../components/Card/Card';
import style from './ResultCards.module.scss';

const ResultCards = () => {
  return (
    <div className={style.result}>
      <Card
        className={style.result__item}
        title='Остаться в живых'
        duration='1 час 58 минут'
        genre='Драма'
        rating={'7,5'}
        year={1993}
        director='Лоренс Каздан'
        actors='Джони Депп, Мэри Стюарт Мастерсон, Энтони Майкл Холл'
        description='Фильм рассказывает историю молодого человека, который пытается восстановить свои отношения со своей бывшей подругой после того, как он вернулся из тюрьмы.'
      />
      <Card
        className={style.result__item}
        title='Остаться в живых'
        duration='1 час 58 минут'
        genre='Драма'
        rating={'7,5'}
        year={1993}
        director='Лоренс Каздан'
        actors='Джони Депп, Мэри Стюарт Мастерсон, Энтони Майкл Холл'
        description='Фильм рассказывает историю молодого человека, который пытается восстановить свои отношения со своей бывшей подругой после того, как он вернулся из тюрьмы.'
      />
      <Card
        className={style.result__item}
        title='Остаться в живых'
        duration='1 час 58 минут'
        genre='Драма'
        rating={'7,5'}
        year={1993}
        director='Лоренс Каздан'
        actors='Джони Депп, Мэри Стюарт Мастерсон, Энтони Майкл Холл'
        description='Фильм рассказывает историю молодого человека, который пытается восстановить свои отношения со своей бывшей подругой после того, как он вернулся из тюрьмы.'
      />
    </div>
  );
};

export default ResultCards;
