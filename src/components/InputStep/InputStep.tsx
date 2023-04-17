import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import style from './InputStep.module.scss';
import { useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  addQueryStep,
  clearSpecific,
  getResultAsync,
  selectQuery,
} from '../../store/querySlice';
import { nextStep, prevStep } from '../../store/stepsSlice';

// img imports
import defaultIco from '../../assets/img/icons/arrowSvg';

interface IInputStep {
  placeholder?: string;
  icon?: any;
  className?: string;
  isNextStepAllow?: boolean;
  currentStep?: number;
  setIsNextStepAllow?: any;
  canSkip?: boolean;
  isFinalStep?: boolean;
  noSkip?: boolean;
  isCustomInput?: boolean;
  setUserChoiceActive?: any;
}

const InputStep = ({
  placeholder,
  icon,
  className,
  isNextStepAllow,
  currentStep,
  setIsNextStepAllow,
  canSkip,
  isFinalStep,
  noSkip,
  isCustomInput,
  setUserChoiceActive,
}: IInputStep) => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const queryData = useAppSelector(selectQuery);

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
              if (isFinalStep) {
                dispatch(addQueryStep([inputRef.current?.value.trim()]));
                // dispatch(getResultAsync(queryData.steps));
                dispatch(
                  getResultAsync([
                    ...queryData.steps,
                    [inputRef.current?.value.trim()],
                  ])
                );
                navigate('/result');
              } else {
                dispatch(addQueryStep([inputRef.current?.value.trim()]));
                dispatch(nextStep());
              }
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
          {noSkip ? (
            ''
          ) : (
            <Button
              onClick={() => {
                dispatch(addQueryStep([]));
                dispatch(nextStep());
              }}
              transparent
              className={style.content__btn}
            >
              Пропустить
            </Button>
          )}
          <Button
            onClick={() => {
              if (isCustomInput) {
                setUserChoiceActive(false);
              } else if (currentStep) {
                dispatch(clearSpecific(currentStep - 1));
                currentStep > 0 ? dispatch(prevStep()) : navigate('/');
              }
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
