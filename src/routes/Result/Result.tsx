import style from './Result.module.scss';
import Navigation from './modules/Navigation/Navigation';
import ResultCards from './modules/ResultCards/ResultCards';

const Result = () => {
  return (
    <div className={style.reuslt}>
      <div className='container'>
        <Navigation />

        <ResultCards />
      </div>
    </div>
  );
};

export default Result;
