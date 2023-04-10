import { useState } from 'react';
import Button from '../../../components/Button/Button';
import Checkbox from '../../../components/Checkbox/Checkbox';
import StepButtons from '../../../components/StepButtons/StepButtons';

const checkboxList: any = [
  [
    'Грусть',
    'Вдохновение',
    'Напряжение и волнение',
    'Приключения и увлекательный сюжет',
  ],
  ['Страх', 'Романтика', 'Свой вариант'],
];

const Step1 = ({ setCurrentStep }: any) => {
  const [isNextStepAllow, setIsNextStepAllow] = useState(false);

  const allowCheck = () => {
    const checkboxes = Array.from(
      document.querySelectorAll('.step-checkboxes__item input')
    );

    if (checkboxes.some((item: any) => item.checked)) {
      setIsNextStepAllow(true);
    } else {
      setIsNextStepAllow(false);
    }
  };

  return (
    <div className='step'>
      <div className='step__question'>
        1. Какие эмоции ты хотел бы испытать, просматривая фильм?
      </div>
      <div className='step-checkboxes'>
        {checkboxList.map((item: any, index: number) => (
          <div className='step-checkboxes__col' key={index}>
            {checkboxList[index].map((item: any, index: number) => (
              <Checkbox
                key={index}
                onClick={() => {
                  allowCheck();
                }}
                className='step-checkboxes__item'
              >
                {item}
              </Checkbox>
            ))}
          </div>
        ))}
      </div>
      <StepButtons
        isNextStepAllow={isNextStepAllow}
        setCurrentStep={setCurrentStep}
      />
    </div>
  );
};

export default Step1;
