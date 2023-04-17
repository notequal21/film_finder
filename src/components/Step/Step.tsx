import { useState } from 'react';
import style from './Step.module.scss';
import Checkbox from '../Checkbox/Checkbox';
import StepButtons from '../StepButtons/StepButtons';
import InputStep from '../InputStep/InputStep';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  addQueryStep,
  getResultAsync,
  selectQuery,
} from '../../store/querySlice';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

interface IStep {
  question: string;
  checkboxList: any;
  currentStep: any;
  subtitle?: string;
  hideBtns?: boolean;
  userInput?: boolean;
  isFinalStep?: boolean;
  inputPlaceholder?: string;
}

const Step = ({
  question,
  checkboxList,
  currentStep,
  hideBtns,
  userInput,
  isFinalStep,
  subtitle,
  inputPlaceholder,
}: IStep) => {
  const dispatch = useAppDispatch();
  const [isNextStepAllow, setIsNextStepAllow] = useState(false);
  const [userChoiceActive, setUserChoiceActive] = useState(false);
  const navigate = useNavigate();
  const queryData = useAppSelector(selectQuery);

  const allowCheck = () => {
    const checkboxes = Array.from(
      document.querySelectorAll(`.${style.stepCheckboxes__item} input`)
    );

    if (checkboxes.some((item: any) => item.checked)) {
      setIsNextStepAllow(true);
    } else {
      setIsNextStepAllow(false);
    }
  };

  const confirmStep = () => {
    const checkboxes = Array.from(
      document.querySelectorAll(`.${style.stepCheckboxes__item} input`)
    );

    const checkedList = checkboxes
      .filter((item: any): any => item.checked)
      .map((item) => item.getAttribute('name'));

    dispatch(addQueryStep(checkedList));
  };

  const confirmEmptyStep = () => {
    dispatch(addQueryStep([]));
  };

  return (
    <div className={style.step}>
      <div
        className={style.step__question}
        dangerouslySetInnerHTML={{ __html: question }}
      ></div>

      {userChoiceActive ? (
        <InputStep
          className={style.step__input}
          setIsNextStepAllow={setIsNextStepAllow}
          isNextStepAllow={isNextStepAllow}
          currentStep={currentStep}
          isCustomInput
          setUserChoiceActive={setUserChoiceActive}
        />
      ) : checkboxList ? (
        <div className={style.stepCheckboxes}>
          {checkboxList.map((item: any, index: number) => (
            <div className={style.stepCheckboxes__col} key={index}>
              {checkboxList[index].map((item: any, index: number) => {
                return (
                  <Checkbox
                    key={index}
                    name={item.name}
                    onClick={() => {
                      if (item.title === 'Свой вариант') {
                        setUserChoiceActive(true);
                      } else {
                        allowCheck();
                      }
                    }}
                    className={style.stepCheckboxes__item}
                  >
                    {item.title}
                  </Checkbox>
                );
              })}
            </div>
          ))}
        </div>
      ) : userInput ? (
        <InputStep
          className={style.step__input}
          setIsNextStepAllow={setIsNextStepAllow}
          isNextStepAllow={isNextStepAllow}
          currentStep={currentStep}
          placeholder={
            isFinalStep
              ? 'Предпочтения'
              : inputPlaceholder
              ? inputPlaceholder
              : 'Введите год или период'
          }
          canSkip
          isFinalStep={isFinalStep}
        />
      ) : (
        ''
      )}

      {subtitle ? <div className={style.step__subtitle}>{subtitle}</div> : ''}

      {hideBtns ? (
        ''
      ) : (
        <StepButtons
          confirmStep={confirmStep}
          confirmEmptyStep={confirmEmptyStep}
          isNextStepAllow={isNextStepAllow}
          currentStep={currentStep}
          isFinalStep={isFinalStep}
        />
      )}

      {currentStep > 0 ? (
        <Button
          onClick={() => {
            // confirmStep();
            dispatch(getResultAsync(queryData.steps));
            navigate('/result');
          }}
          className={style.submit}
        >
          Начать поиск
        </Button>
      ) : (
        ''
      )}
    </div>
  );
};

export default Step;
