import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import style from './InputSarch.module.scss';
import { useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  addQueryStep,
  getResultAsync,
  selectQuery,
} from '../../store/querySlice';

// img imports
import defaultIco from '../../assets/img/icons/searchSvg';

interface IInputSarch {
  placeholder?: string;
  icon?: any;
  className?: string;
  currentStep?: number;
  canSkip?: boolean;
  isFinalStep?: boolean;
  noSkip?: boolean;
}

const InputSarch = ({
  placeholder,
  icon,
  className,
  currentStep,
  canSkip,
  isFinalStep,
  noSkip,
}: IInputSarch) => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const [isNextStepAllow, setIsNextStepAllow] = useState(false);
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
              dispatch(addQueryStep([inputRef.current?.value.trim()]));
              dispatch(getResultAsync(queryData.steps));
              navigate('/result');
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
              navigate('/');
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

export default InputSarch;
