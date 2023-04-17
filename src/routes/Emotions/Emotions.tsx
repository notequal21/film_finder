import ProgressBar from '../../components/ProgressBar/ProgressBar';
import style from './Emotions.module.scss';
import Step from '../../components/Step/Step';
import { useAppSelector } from '../../store/hooks';
import { selectCurrentStep } from '../../store/stepsSlice';

// steps
const stepsList = [
  {
    question: '1. Какие эмоции ты хотел бы испытать, просматривая фильм?',
    checkboxList: [
      [
        {
          name: 'name',
          title: 'Грусть',
        },
        {
          name: 'name 2',
          title: 'Вдохновение',
        },
        {
          name: 'name 3',
          title: 'Напряжение и волнение',
        },
        {
          name: 'name 4',
          title: 'Приключения и увлекательный сюжет',
        },
      ],
      [
        { name: 'name', title: 'Страх' },
        { name: 'name', title: 'Романтика' },
        { name: 'name', title: 'Свой вариант' },
      ],
    ],
  },
  {
    question: '2. Что для тебя важнее всего в фильме?',
    checkboxList: [
      [
        { name: 'name', title: 'Глубокий смысл и философия' },
        { name: 'name', title: 'Качественный сценарий и режиссура' },
        { name: 'name', title: 'Хорошо снятые сцены и спецэффекты' },
      ],
      [
        { name: 'name', title: 'Профессиональная игра актеров' },
        { name: 'name', title: 'Красивая музыка и звуковое сопровождение' },
        { name: 'name', title: 'Свой вариант' },
      ],
    ],
  },
  {
    question: '3. К какому выводу должен привести фильм?',
    checkboxList: [
      [
        { name: 'name', title: 'Важность любви и семьи' },
        { name: 'name', title: 'Жизнь полна возможностей' },
        {
          name: 'name',
          title: 'Настоящее счастье может быть найдено внутри нас',
        },
      ],
      [
        { name: 'name', title: 'Пересмотрите свои ценности и приоритеты' },
        {
          name: 'name',
          title:
            'Все проблемы могут быть решены при <br/> помощи друзей и силы воли',
        },
        { name: 'name', title: 'Свой вариант' },
      ],
    ],
  },
  {
    question:
      '4. Какой год выпуска фильма тебя интересует? Можешь назвать конкретный год или <br/> период времени, который тебе ближе, или ответить "Любой".',
    userInput: true,
    hideBtns: true,
  },
  {
    question:
      '5. В какое место и время событий тебе хотелось бы попасть? <br/> Если есть конкретные предпочтения, то можешь их озвучить.',
    userInput: true,
    isFinalStep: true,
  },
];

const Emotions = () => {
  const currentStep = useAppSelector(selectCurrentStep);

  return (
    <div className={style.emotions}>
      <div className='container'>
        <div className={`${style.emotionsBody} screen-body`}>
          {currentStep === 0 ? (
            <div className='screen__text'>
              Привет! Я могу помочь тебе выбрать фильм. Для этого ответь на
              несколько <br /> вопросов, чтобы я мог подобрать для тебя
              подходящий вариант.
            </div>
          ) : (
            ''
          )}

          <ProgressBar
            className={style.emotionsBody__progress}
            percentage={(100 / (stepsList.length - 1)) * currentStep}
          />

          {stepsList.map((item, index: number) => {
            if (currentStep === index) {
              return (
                <Step
                  key={index}
                  question={item.question}
                  checkboxList={item.checkboxList}
                  currentStep={currentStep}
                  hideBtns={item.hideBtns ? true : false}
                  userInput={item.userInput ? true : false}
                  isFinalStep={item.isFinalStep ? true : false}
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

export default Emotions;
