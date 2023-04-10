import { useState } from 'react';
import style from './Step.module.scss';
import Checkbox from '../Checkbox/Checkbox';
import StepButtons from '../StepButtons/StepButtons';
import InputStep from '../InputStep/InputStep';
import { useAppDispatch } from '../../store/hooks';
import { addQueryStep } from '../../store/querySlice';
import Button from '../Button/Button';

interface IStep {
  question: string;
  checkboxList: any;
  currentStep: any;
  setCurrentStep: any;
  hideBtns?: boolean;
  userInput?: boolean;
  isFinalStep?: boolean;
}

const Step = ({
  question,
  checkboxList,
  currentStep,
  setCurrentStep,
  hideBtns,
  userInput,
  isFinalStep,
}: IStep) => {
  const dispatch = useAppDispatch();
  const [isNextStepAllow, setIsNextStepAllow] = useState(false);
  const [userChoiceActive, setUserChoiceActive] = useState(false);

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

  return (
    <div className={style.step}>
      <div className={style.step__question}>{question}</div>

      {userChoiceActive ? (
        <InputStep
          className={style.step__input}
          setIsNextStepAllow={setIsNextStepAllow}
          isNextStepAllow={isNextStepAllow}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      ) : checkboxList ? (
        <div className={style.stepCheckboxes}>
          {checkboxList.map((item: any, index: number) => (
            <div className={style.stepCheckboxes__col} key={index}>
              {checkboxList[index].map((item: any, index: number) => {
                return (
                  <Checkbox
                    key={index}
                    onClick={() => {
                      if (item === 'Свой вариант') {
                        setUserChoiceActive(true);
                      } else {
                        allowCheck();
                      }
                    }}
                    className={style.stepCheckboxes__item}
                  >
                    {item}
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
          setCurrentStep={setCurrentStep}
          placeholder={isFinalStep ? 'Предпочтения' : 'Введите год или период'}
          canSkip
          isFinalStep={isFinalStep}
        />
      ) : (
        ''
      )}

      {hideBtns ? (
        ''
      ) : (
        <StepButtons
          confirmStep={confirmStep}
          isNextStepAllow={isNextStepAllow}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          isFinalStep={isFinalStep}
        />
      )}
    </div>
  );
};

export default Step;
