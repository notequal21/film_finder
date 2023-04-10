import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';

const StepButtons = ({ isNextStepAllow, setCurrentStep }: any) => {
  const navigate = useNavigate();

  return (
    <div className='step-btns'>
      <Button
        onClick={() => {
          isNextStepAllow && setCurrentStep(1);
        }}
        disabled={!isNextStepAllow}
        className='step-btns__item'
      >
        Продолжить
      </Button>
      <Button
        onClick={() => {
          setCurrentStep(1);
        }}
        transparent
        className='step-btns__item'
      >
        Пропустить
      </Button>
      <Button
        onClick={() => navigate('/')}
        transparent
        className='step-btns__item'
      >
        Назад
      </Button>
    </div>
  );
};

export default StepButtons;
