import Card from '../../../../components/Card/Card';
import { useAppSelector } from '../../../../store/hooks';
import { selectResult } from '../../../../store/querySlice';
import style from './ResultCards.module.scss';

const ResultCards = () => {
  const resultData = useAppSelector(selectResult);

  return (
    <div className={style.result}>
      {resultData.map((item: any) => (
        <Card
          key={item.id}
          className={style.result__item}
          title={item.name}
          duration={item.duration}
          genre={item.genre}
          rating={item.rating}
          year={item.year}
          director={item.director}
          actors={item.actors}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default ResultCards;
