import { useState } from 'react';
import Checkbox from '../../../components/Checkbox/Checkbox';
import StepButtons from '../../../components/StepButtons/StepButtons';

const checkboxList: any = [
  [
    'Глубокий смысл и философия',
    'Качественный сценарий и режиссура',
    'Хорошо снятые сцены и спецэффекты',
  ],
  [
    'Профессиональная игра актеров',
    'Красивая музыка и звуковое сопровождение',
    'Свой вариант',
  ],
];

const Step2 = ({ setCurrentStep }: any) => {
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
        2. Что для тебя важнее всего в фильме?
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

export default Step2;
