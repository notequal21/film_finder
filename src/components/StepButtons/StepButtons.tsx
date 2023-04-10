import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import style from './StepButtons.module.scss';
import { useAppDispatch } from '../../store/hooks';
import { clearSpecific } from '../../store/querySlice';

const StepButtons = ({
  confirmStep,
  isNextStepAllow,
  currentStep,
  setCurrentStep,
  isFinalStep,
}: any) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <div className={style.btns}>
      {isFinalStep ? (
        ''
      ) : (
        <Button
          onClick={() => {
            confirmStep();
            isNextStepAllow && setCurrentStep(++currentStep);
          }}
          disabled={!isNextStepAllow}
          className={style.btns__item}
        >
          Продолжить
        </Button>
      )}
      <Button
        onClick={() => {
          confirmStep();
          setCurrentStep(++currentStep);
        }}
        transparent
        className={style.btns__item}
      >
        Пропустить
      </Button>
      <Button
        onClick={() => {
          if (currentStep > 0) {
            setCurrentStep(--currentStep);
            dispatch(clearSpecific(currentStep));
          } else {
            navigate('/');
          }
        }}
        transparent
        className={style.btns__item}
      >
        Назад
      </Button>
    </div>
  );
};

export default StepButtons;
