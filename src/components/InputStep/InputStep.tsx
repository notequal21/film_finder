import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import style from './InputStep.module.scss';

// img imports
import defaultIco from '../../assets/img/icons/arrowSvg';
import { useRef } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { addQueryStep, clearSpecific } from '../../store/querySlice';

interface IInputStep {
  placeholder?: string;
  icon?: any;
  className?: string;
  isNextStepAllow: boolean;
  currentStep: number;
  setCurrentStep: any;
  setIsNextStepAllow: any;
  canSkip?: boolean;
  isFinalStep?: boolean;
}

const InputStep = ({
  placeholder,
  icon,
  className,
  isNextStepAllow,
  currentStep,
  setCurrentStep,
  setIsNextStepAllow,
  canSkip,
  isFinalStep,
}: IInputStep) => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  return (
    <div
      className={`${style.content} ${className} ${
        isFinalStep ? style._long : ''
      }`}
    >
      <div className={`${style.content__input}`}>
        <input
          ref={inputRef}
          onInput={(e) => {
            const target = e.target as HTMLTextAreaElement;

            if (target.value.length >= 2) {
              setIsNextStepAllow(true);
            } else {
              setIsNextStepAllow(false);
            }
          }}
          type='text'
          placeholder={placeholder ? placeholder : 'Введите ответ'}
        />
        <button
          disabled={!isNextStepAllow}
          onClick={() => {
            if (isNextStepAllow) {
              setCurrentStep(++currentStep);
              dispatch(addQueryStep([inputRef.current?.value.trim()]));
            }
          }}
        >
          {icon ? icon : defaultIco()}
        </button>
      </div>
      {isFinalStep ? (
        ''
      ) : (
        <>
          <Button
            onClick={() => {
              setCurrentStep(++currentStep);
              dispatch(addQueryStep([]));
            }}
            transparent
            className={style.content__btn}
          >
            Пропустить
          </Button>
          <Button
            onClick={() => {
              currentStep > 0 ? setCurrentStep(--currentStep) : navigate('/');
              dispatch(clearSpecific(currentStep));
            }}
            transparent
            className={style.content__btn}
          >
            Назад
          </Button>
        </>
      )}
    </div>
  );
};

export default InputStep;
