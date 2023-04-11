import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import style from './StepButtons.module.scss';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  clearSpecific,
  getResultAsync,
  selectQuery,
} from '../../store/querySlice';
import { nextStep, prevStep, selectCurrentStep } from '../../store/stepsSlice';

const StepButtons = ({
  confirmStep,
  confirmEmptyStep,
  isNextStepAllow,
  isFinalStep,
}: any) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentStep = useAppSelector(selectCurrentStep);
  const queryData = useAppSelector(selectQuery);

  return (
    <div className={style.btns}>
      {isFinalStep ? (
        ''
      ) : (
        <Button
          onClick={() => {
            confirmStep();
            isNextStepAllow && dispatch(nextStep());
          }}
          disabled={!isNextStepAllow}
          className={style.btns__item}
        >
          Продолжить
        </Button>
      )}
      <Button
        onClick={() => {
          confirmEmptyStep();

          if (isFinalStep) {
            dispatch(getResultAsync(queryData.steps));
            navigate('/result');
          } else {
            dispatch(nextStep());
          }
        }}
        transparent
        className={style.btns__item}
      >
        Пропустить
      </Button>
      <Button
        onClick={() => {
          if (currentStep > 0) {
            dispatch(prevStep());
            dispatch(clearSpecific(currentStep - 1));
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
