import { useState } from 'react';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import style from './Emotions.module.scss';
import Step1 from './Steps/Step1';

const Emotions = () => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className={style.emotions}>
      <div className='container'>
        <div className={`${style.emotionsBody} screen-body`}>
          <div className='screen__text'>
            Привет! Я могу помочь тебе выбрать фильм. Для этого ответь на
            несколько вопросов, чтобы я мог подобрать для тебя подходящий
            вариант.
          </div>
          <ProgressBar
            className={style.emotionsBody__progress}
            percentage={10}
          />
          {currentStep === 0 ? <Step1 setCurrentStep={setCurrentStep} /> : ''}
        </div>
      </div>
    </div>
  );
};

export default Emotions;
