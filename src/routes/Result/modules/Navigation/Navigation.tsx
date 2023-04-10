import Button from '../../../../components/Button/Button';
import style from './Navigation.module.scss';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <div className={style.navigation}>
      <div className={style.navigation__title}>Результат поиска</div>
      <div className={style.navigationBtns}>
        <Button
          onClick={() => {
            navigate('/');
          }}
          className={style.navigationBtns__item}
        >
          Главное меню
        </Button>
        <Button
          onClick={() => {
            //  currentStep > 0 ? setCurrentStep(--currentStep) : navigate('/');
            //  dispatch(clearSpecific(currentStep));
          }}
          transparent
          className={style.navigationBtns__item}
        >
          Назад
        </Button>
      </div>
    </div>
  );
};

export default Navigation;
