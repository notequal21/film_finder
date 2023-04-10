import { useState } from 'react';
import style from './Condition.module.scss';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import Step from '../../components/Step/Step';

// steps
const stepsList = [
  {
    question:
      '1. Какой жанр фильма ты бы предпочел посмотреть? Можешь выбрать номер из списка или написать свой вариант.',
    checkboxList: [
      ['Боевик', 'Комедия', 'Драма', 'Фантастика', 'Ужасы'],
      ['Мелодрама', 'Триллер', 'Мультфильм'],
    ],
  },
];

const Condition = () => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className={style.condition}>
      <div className='container'>
        <div className={`${style.conditionBody} screen-body`}>
          {currentStep === 0 ? (
            <div className='screen__text'>
              Приветствую! Я буду рад помочь тебе подобрать фильм для просмотра!
              Для начала, давай я задам тебе несколько вопросов, чтобы узнать
              твои предпочтения и настроение
            </div>
          ) : (
            ''
          )}
          <ProgressBar
            className={style.conditionBody__progress}
            percentage={10}
          />

          {stepsList.map((item, index: number) => {
            if (currentStep === index) {
              return (
                <Step
                  key={index}
                  question={item.question}
                  checkboxList={item.checkboxList}
                  currentStep={currentStep}
                  setCurrentStep={setCurrentStep}
                />
              );
            } else {
              return '';
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Condition;
